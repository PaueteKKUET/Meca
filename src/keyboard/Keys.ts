import {SimpleKey, KeyProperties, KeySize} from "./Keyboard";

class Layout {
    private readonly rows: Array<Array<SimpleKey>>;
    private readonly initFunction: () => void;

    constructor(initFunction: () => void) {
        this.rows = new Array<Array<SimpleKey>>();
        this.initFunction = initFunction;
    }

    public addRow(row: Array<SimpleKey>) {
        this.rows.push(row);
    }

    public getRows(): Array<Array<SimpleKey>> {
        return this.rows;
    }

    public init() {
        this.initFunction();
    }
}


export const QWERTY_esEs = new Layout(() =>{
    QWERTY_esEs.addRow(
        [
            new KeyProperties(
                "º",
                "ª",
                "\\"
            ).create(),
            new KeyProperties(
                "1",
                "!",
                "|"
            ).create(),
            new KeyProperties(
                "2",
                "\"",
                "@"
            ).create(),
            new KeyProperties(
                "3",
                "·",
                "#"
            ).create(),
            new KeyProperties(
                "4",
                "$",
                "~"
            ).create(),
            new KeyProperties(
                "5",
                "%"
            ).create(),
            new KeyProperties(
                "6",
                "&",
                "¬"
            ).create(),
            new KeyProperties(
                "7",
                "/"
            ).create(),
            new KeyProperties(
                "8",
                "("
            ).create(),
            new KeyProperties(
                "9",
                ")"
            ).create(),
            new KeyProperties(
                "0",
                "="
            ).create(),
            new KeyProperties(
                "'",
                "?"
            ).create(),
            new KeyProperties(
                "¡",
                "¿"
            ).create(),
            new KeyProperties(
                "",
                "",
                "",
                KeySize.BACKSPACE,
                ["backspace"],
                "backspace"
            ).create()
        ]
    );
    QWERTY_esEs.addRow(
        [
            new KeyProperties(
                "",
                "",
                "",
                KeySize.TAB,
                ["tab"],
                "tab"
            ).create(),
            new KeyProperties(
                "Q"
            ).create(),
            new KeyProperties(
                "W"
            ).create(),
            new KeyProperties(
                "E",
                "",
                "€"
            ).create(),
            new KeyProperties(
                "R"
            ).create(),
            new KeyProperties(
                "T"
            ).create(),
            new KeyProperties(
                "Y"
            ).create(),
            new KeyProperties(
                "U"
            ).create(),
            new KeyProperties(
                "I"
            ).create(),
            new KeyProperties(
                "O"
            ).create(),
            new KeyProperties(
                "P"
            ).create(),
            new KeyProperties(
                "`",
                "^",
                "["
            ).create(),
            new KeyProperties(
                "+",
                "*",
                "]"
            ).create(),
            new KeyProperties(
                "",
                "",
                "",
                KeySize.INTRO,
                ["enter"],
                "enter"
            ).create()
        ]
    );
    QWERTY_esEs.addRow(
        [
            new KeyProperties(
                "Mayus",
                "Bloq",
                "",
                KeySize.CAPS,
                ["capslock"],
                "capslock"
            ).create(),
            new KeyProperties(
                "A"
            ).create(),
            new KeyProperties(
                "S"
            ).create(),
            new KeyProperties(
                "D"
            ).create(),
            new KeyProperties(
                "F"
            ).create(),
            new KeyProperties(
                "G"
            ).create(),
            new KeyProperties(
                "H"
            ).create(),
            new KeyProperties(
                "J"
            ).create(),
            new KeyProperties(
                "K"
            ).create(),
            new KeyProperties(
                "L"
            ).create(),
            new KeyProperties(
                "Ñ"
            ).create(),
            new KeyProperties(
                "´",
                "¨",
                "{"
            ).create(),
            new KeyProperties(
                "Ç",
                "",
                "}"
            ).create()
        ]
    );
    QWERTY_esEs.addRow(
        [
            new KeyProperties(
                "",
                "",
                "",
                KeySize.BIG,
                ["lShift"],
                "lShift"
            ).create(),
            new KeyProperties(
                "<",
                ">"
            ).create(),
            new KeyProperties(
                "Z"
            ).create(),
            new KeyProperties(
                "X"
            ).create(),
            new KeyProperties(
                "C"
            ).create(),
            new KeyProperties(
                "V"
            ).create(),
            new KeyProperties(
                "B"
            ).create(),
            new KeyProperties(
                "N"
            ).create(),
            new KeyProperties(
                "M"
            ).create(),
            new KeyProperties(
                ",",
                ";"
            ).create(),
            new KeyProperties(
                ".",
                ":"
            ).create(),
            new KeyProperties(
                "-",
                "_"
            ).create(),
            new KeyProperties(
                "",
                "",
                "",
                KeySize.BIGSHIFT,
                ["rShift"],
                "rShift"
            ).create()
        ]
    );
    QWERTY_esEs.addRow(
        [
            new KeyProperties(
                "Ctrl",
                "",
                "",
                KeySize.BIG,
                ["lCtrl"],
                "lCtrl"
            ).create(),
            new KeyProperties(
                "OS",
                "",
                "",
                KeySize.BIG,
                ["lOS"],
                "lOS"
            ).create(),
            new KeyProperties(
                "Alt",
                "",
                "",
                KeySize.BIG
            ).create(),
            new KeyProperties(
                "",
                "",
                "",
                KeySize.SPACEBAR,
                ["space"],
                "space"
            ).create(),
            new KeyProperties(
                "Alt Gr",
                "",
                "",
                KeySize.BIG,
                ["altgr"],
                "altgr"
            ).create(),
            new KeyProperties(
                "OS",
                "",
                "",
                KeySize.BIG,
                ["rOS"],
                "rOS"
            ).create(),
            new KeyProperties(
                "Menu",
                "",
                "",
                KeySize.BIG
            ).create(),
            new KeyProperties(
                "Ctrl",
                "",
                "",
                KeySize.BIG,
                ["rCtrl"],
                "rCtrl"
            ).create()
        ]
    );
});
