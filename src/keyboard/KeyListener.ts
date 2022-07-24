import {keyMap, KeyType} from "./Keyboard";

document.addEventListener("keydown", onKeyDown);
document.addEventListener("keyup", onKeyUp);

function onKeyDown(event: KeyboardEvent): void {

    event.preventDefault();
    let char: string = formatKey(event);
    if (isShift(char)) highLight(KeyType.SHIFT);
    if (isAlt(char)) highLight(KeyType.ALT);


    keyMap.get(char)?.press();
    console.log("(" + char + ")");
}

function onKeyUp(event: KeyboardEvent): void {
    event.preventDefault();
    let char: string = formatKey(event);
    if (isShift(char) || isAlt(char)) highLight(KeyType.NORMAL);

    keyMap.get(char)?.release();
}


function formatKey(event: KeyboardEvent): string {
    let char: string = event.key.toUpperCase();

    if (
        char === "SHIFT"
        || char === "CONTROL"
        || char === "OS"
    ) {
        if (event.location === KeyboardEvent.DOM_KEY_LOCATION_LEFT) {
            char = "L" + char;
        } else if (event.location === KeyboardEvent.DOM_KEY_LOCATION_RIGHT) {
            char = "R" + char;
        }
    }

    return char;
}

function isShift(char: string): boolean {
    return char === "SHIFT" || char === "LSHIFT" || char === "RSHIFT";
}

function isAlt(char: string): boolean {
    console.log(char);
    return char === "ALTGRAPH";
}

function highLight(keyType: KeyType) {
    keyMap.forEach(key => {
        key.highlight(keyType);
    });
}