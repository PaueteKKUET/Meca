import React from "react";
import {QWERTY_esEs} from "./Keys";

import "./Keyboard.css";

import "./KeyListener";

export class SimpleKey extends React.Component<
    {
        keyProps: KeyProperties
    },
    {
        pressed: boolean,
        highlighted: KeyType
    }> {

    private keyProps: KeyProperties;

    /**
     * Creates a Key object.
     * @param props the properties of the key
     * @see KeyProperties
     */
    constructor(props: any) {
        super(props);

        this.keyProps = props.keyProps;

        this.state = {
            pressed: false,
            highlighted: KeyType.NORMAL
        }

        this.setupHandlers();
    }

    /**
     * Stores the key in the key map.
     * @private
     */
    private setupHandlers(): void {
        for (let keyName of this.getTriggerKeys()) {
            keyMap.set(keyName, this)
        }
    }

    /**
     * Returns the name of the key, which should be
     * added to the class list of the key element.
     * @returns the name of the key
     */
    public getName(): string {
        return this.keyProps.name;
    }

    /**
     * @returns the main character of the key.
     */
    public getMainChar(): string {
        return this.keyProps.mainChar;
    }

    /**
     * @returns whether the key contains a shift character.
     */
    public hasShift(): boolean {
        return this.getShiftChar() !== "";
    }

    /**
     * @returns the shift character of the key, or "" if the key does not have a shift character.
     */
    public getShiftChar(): string {
        return this.keyProps.shiftChar ?? "";
    }

    /**
     * @returns whether the key contains an alt character.
     */
    public hasAlt(): boolean {
        return this.getAltChar() !== "";
    }

    /**
     * @returns the alt character of the key, or "" if the key does not have an alt character.
     */
    public getAltChar(): string {
        return this.keyProps.altChar ?? "";
    }

    /**
     * @returns the size of the key.
     */
    public getSize(): KeySize {
        return this.keyProps.size;
    }

    /**
     * Returns the extra key values which should
     * trigger this key.
     */
    public getTriggerKeys(): string[] {
        return [
            this.getMainChar(),
            this.getShiftChar(),
            this.getAltChar(),
            ...this.keyProps.extraTriggers
        ];
    }

    /**
     * Presses the key.
     */
    public press(): void {
        this.setState({pressed: true});
    }

    /**
     * Releases the key.
     */
    public release(): void {
        this.setState({pressed: false});
    }

    /**
     * Highlights the specified character type.
     * @param type the character type to highlight
     */
    public highlight(type: KeyType) {
        this.setState({highlighted: type});
    }

    render() {

        // array of jsx objects
        let characters: JSX.Element[] = [];

        // add the main character
        characters.push(
            <span
                className={"char mainChar" + (this.state.highlighted === KeyType.NORMAL ? " highlighted" : "")}
            >
                {this.getMainChar()}
            </span>);

        // add the shift character if it exists
        if (this.hasShift()) {
            characters.push(
                <span
                    className={"char shiftChar" + (this.state.highlighted === KeyType.SHIFT ? " highlighted" : "")}
                >
                    {this.getShiftChar()}
                </span>);
        }

        // add the alt character if it exists
        if (this.hasAlt()) {
            characters.push(
                <span
                    className={"char altChar" + (this.state.highlighted === KeyType.ALT ? " highlighted" : "")}
                >
                    {this.getAltChar()}
                </span>);
        }

        return (
            <div
                className={`key ${this.getName()} ${this.getSize()} ${this.state.pressed ? "pressed" : ""}`}
            >
                {characters}
            </div>
        )
    }
}

/**
 * Defines the properties of a key.
 * Stores the name of the key and
 * the main character of the key and its size.
 * Can also store the shift character of the key,
 * the alt character of the key, and the extra triggers of the key.
 */
export class KeyProperties {
    public readonly name: string;

    public readonly mainChar: string;
    public readonly shiftChar: string;
    public readonly altChar: string;

    public readonly size: KeySize;

    public readonly extraTriggers: string[];

    /**
     * Creates a KeyProps object.
     * @param mainChar the main character of the key
     * @param shiftChar the shift character of the key
     * @param altChar the alt character of the key
     * @param size the size of the key
     * @param extraTriggers the extra triggers of the key
     * @param keyName the name of the key
     */
    constructor(
        mainChar: string,
        shiftChar: string = "",
        altChar: string = "",
        size: KeySize = KeySize.NORMAL,

        extraTriggers: string[] = [],
        keyName: string = mainChar,
    ) {
        this.name = "key" + keyName.trim();

        this.mainChar = mainChar;
        this.shiftChar = shiftChar;
        this.altChar = altChar;

        this.size = size;

        this.extraTriggers = extraTriggers;
    }

}

/**
 * Defines the size of a key. The CSS should define
 * the real size of the key basing on this size.
 */
export enum KeySize {
    NORMAL = "normal",
    BIG = "big",
    TAB = "tab",
    CAPS = "caps",
    BIGSHIFT = "bigcaps",
    BACKSPACE = "backspace",
    INTRO = "intro",
    SPACEBAR = "spacebar"
}

/**
 * Defines the type of key.
 */
export enum KeyType {
    NORMAL,
    SHIFT,
    ALT
}

/**
 * Stores all the available keys on the keyboard and their respective key components.
 */
export const keyMap: Map<string, SimpleKey> = new Map<string, SimpleKey>();

let keyboardRows = [];

/**
 * Generates the keyboard JSX Element
 */
function generateKeyboard(): Array<JSX.Element> {
    let keyboard: Array<JSX.Element> = [];

    QWERTY_esEs.getRows().forEach(row => {
        let rowElements: Array<JSX.Element> = [];
        row.forEach(key => {
            rowElements.push(
                <SimpleKey keyProps={key} key={key.name} />
            )
        });
        keyboard.push(
            <div
                className={"keyboardRow"}
            >
                {rowElements}
            </div>
        );
    });

    return keyboard;
}

/**
 * The Meca keyboard component. It contains rows of keys.
 */
export const Keyboard = () => {
    QWERTY_esEs.init();

    return (
        <div className={"keyboard"}>
            {generateKeyboard()}
        </div>
    );
}

