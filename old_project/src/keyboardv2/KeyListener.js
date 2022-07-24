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
