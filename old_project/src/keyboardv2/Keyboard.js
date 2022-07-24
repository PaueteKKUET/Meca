import React from "react";


import "./KeyboardPlaceholder.css";

import {QWERTY} from "./Keys";
import {setupListeners} from "./KeyListener";

export const keyHandlers = new Map();
setupListeners();

class SimpleKey extends React.Component {
    constructor(props) {
        super(props);

        this.mainChar = props.mainChar;
        this.shiftChar = props.shiftChar;
        this.altChar = props.altChar;

        this.triggerKeys = [
            this.altChar ?? "",
            this.shiftChar ?? "",
            this.mainChar ?? "",
            ...props.extraTriggerChars
        ];
        this.size = "simple";

        this.state = {
            pressed: false
        }

        this.setupKeyHandlers();

    }

    setupKeyHandlers() {
        for (let key of this.triggerKeys) {
            keyHandlers.set(key.toUpperCase(), this);
        }
    }

    press() {
        this.setState({pressed: true});
    }

    release() {
        this.setState({pressed: false});
    }

    hasShift() {
        return this.shiftChar !== undefined;
    }

    hasAlt() {
        return this.altChar !== undefined;
    }

    getSize() {
        return this.size;
    }

    render() {

        let charObjects = [
            <p className="char mainChar" key={this.mainChar}>{this.mainChar}</p>
        ];
        if (this.hasShift()) {
            charObjects.push(
                <p className="char shiftChar" key={this.shiftChar}>{this.shiftChar}</p>
            );
        }
        if (this.hasAlt()) {
            charObjects.push(
                <p className="char altChar" key={this.altChar}>{this.altChar}</p>
            );
        }

        return (
            <div className={(this.state.pressed ? "pressed " : "") + "key " + this.getSize()}>
                {charObjects}
            </div>
        )
    }
}

SimpleKey.defaultProps = {
    mainChar: "\n",
    shiftChar: undefined,
    altChar: undefined,

    extraTriggerChars: [],
};

class SpecialKey extends SimpleKey {
    constructor(props) {
        super(props);

        this.size = props.size;
    }

}

class BigKey extends SpecialKey {
    constructor(props) {
        super(props);
        this.size = "big";
    }
}


function generateKey(keyRecipe) {

    let extraTriggerChars = keyRecipe.extra ?? [];

    switch (keyRecipe.type) {
        case "simple":
            return (
                <SimpleKey
                    mainChar={keyRecipe.mainChar}
                    shiftChar={keyRecipe.shiftChar ?? undefined}
                    altChar={keyRecipe.altChar ?? undefined}

                    extraTriggerChars={extraTriggerChars}
                />
            );
        case "backspace":
            return (
                <SpecialKey
                    mainChar="←"
                    size="backspace"

                    extraTriggerChars={extraTriggerChars}
                />
            );
        case "tab":
            return (
                <SpecialKey
                    mainChar="→"
                    shiftChar="←"
                    size="tab"

                    extraTriggerChars={extraTriggerChars}
                />
            );
        case "newline":
            return (
                <SpecialKey
                    mainChar="↵"
                    size="newline"

                    extraTriggerChars={extraTriggerChars}
                />
            );
        case "multiNewline":
            return (
                <SpecialKey
                    mainChar="↵"
                    size="bigNewline"

                    extraTriggerChars={extraTriggerChars}
                />
            );
        case "caps":
            return (
                <SpecialKey
                    mainChar="Mayus"
                    shiftChar="Bloq"
                    size="capsLock"

                    extraTriggerChars={extraTriggerChars}
                />
            );
        case "shift":
            return (
                <BigKey
                    mainChar="⇧"

                    extraTriggerChars={extraTriggerChars}
                />
            );
        case "bigShift":
            return (
                <SpecialKey
                    mainChar="⇧"
                    size="bigShift"

                    extraTriggerChars={extraTriggerChars}
                />
            );
        case "ctrl":
            return (
                <BigKey
                    mainChar="Ctrl"

                    extraTriggerChars={extraTriggerChars}
                />
            );
        case "alt":
            return (
                <BigKey
                    mainChar="Alt"

                    extraTriggerChars={extraTriggerChars}
                />
            );
        case "spacebar":
            return (
                <SpecialKey
                    mainChar=""
                    size="spacebar"

                    extraTriggerChars={extraTriggerChars}
                />
            );
        case "altGr":
            return (
                <BigKey
                    mainChar="Alt Gr"

                    extraTriggerChars={extraTriggerChars}
                />
            );
        case "menu":
            return (
                <BigKey
                    mainChar="Menu"

                    extraTriggerChars={extraTriggerChars}
                />
            );
        default:
            return (
                <BigKey
                    mainChar=":("

                    extraTriggerChars={extraTriggerChars}
                />
            );
    }
}

function generateRow(index, layout) {

    let rowLayout = layout[index];
    let keys = [];

    for (let i = 0; i < rowLayout.length; i++) {
        let keyRecipe = rowLayout[i];
        keys.push(generateKey(keyRecipe));
    }

    return (
        <div className="keyboardRow">
            {keys}
        </div>
    )
}

export const Keyboard = () => {
    let layout = QWERTY.es_ES;
    let rows = [];

    for (let i = 0; i < layout.length; i++) {
        rows.push(generateRow(i, layout));
    }

    console.log(keyHandlers);

    return (
        <div className="keyboard">
            {rows}
        </div>
    );
}