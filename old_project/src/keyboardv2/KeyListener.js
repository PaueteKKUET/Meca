import {keyHandlers} from "./Keyboard";

export const setupListeners = () => {
    document.addEventListener("keydown", onKeyPress);
    document.addEventListener("keyup", onKeyRelease);
}

function onKeyPress(event) {
    event.preventDefault();

    let char = formatKey(event);

    keyHandlers.get(char)?.press();
    console.log("(" + char + ")");

}

function onKeyRelease(event) {
    let char = formatKey(event);

    keyHandlers.get(char)?.release();
}

function formatKey(event) {
    let char = event.key.toUpperCase();

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