import {SimpleKey, KeyProperties, KeySize} from "./Keyboard";

class Layout {
    private rows: Array<Array<KeyProperties>>;
    private readonly initFunction: () => void;

    constructor(initFunction: () => void) {
        this.rows = new Array<Array<KeyProperties>>();
        this.initFunction = initFunction;
    }

    public addRow(row: Array<KeyProperties>) {
        this.rows = [...this.rows, row];
    }

    public getRows(): Array<Array<KeyProperties>> {
        return [...this.rows];
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
            ),
            new KeyProperties(
                "1",
                "!",
                "|"
            ),
            new KeyProperties(
                "2",
                "\"",
                "@"
            ),
            new KeyProperties(
                "3",
                "·",
                "#"
            ),
            new KeyProperties(
                "4",
                "$",
                "~"
            ),
            new KeyProperties(
                "5",
                "%"
            ),
            new KeyProperties(
                "6",
                "&",
                "¬"
            ),
            new KeyProperties(
                "7",
                "/"
            ),
            new KeyProperties(
                "8",
                "("
            ),
            new KeyProperties(
                "9",
                ")"
            ),
            new KeyProperties(
                "0",
                "="
            ),
            new KeyProperties(
                "'",
                "?"
            ),
            new KeyProperties(
                "¡",
                "¿"
            ),
            new KeyProperties(
                "",
                "",
                "",
                KeySize.BACKSPACE,
                ["backspace"],
                "backspace"
            )
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
            ),
            new KeyProperties(
                "Q"
            ),
            new KeyProperties(
                "W"
            ),
            new KeyProperties(
                "E",
                "",
                "€"
            ),
            new KeyProperties(
                "R"
            ),
            new KeyProperties(
                "T"
            ),
            new KeyProperties(
                "Y"
            ),
            new KeyProperties(
                "U"
            ),
            new KeyProperties(
                "I"
            ),
            new KeyProperties(
                "O"
            ),
            new KeyProperties(
                "P"
            ),
            new KeyProperties(
                "`",
                "^",
                "["
            ),
            new KeyProperties(
                "+",
                "*",
                "]"
            ),
            new KeyProperties(
                "",
                "",
                "",
                KeySize.INTRO,
                ["enter"],
                "enter"
            )
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
            ),
            new KeyProperties(
                "A"
            ),
            new KeyProperties(
                "S"
            ),
            new KeyProperties(
                "D"
            ),
            new KeyProperties(
                "F"
            ),
            new KeyProperties(
                "G"
            ),
            new KeyProperties(
                "H"
            ),
            new KeyProperties(
                "J"
            ),
            new KeyProperties(
                "K"
            ),
            new KeyProperties(
                "L"
            ),
            new KeyProperties(
                "Ñ"
            ),
            new KeyProperties(
                "´",
                "¨",
                "{"
            ),
            new KeyProperties(
                "Ç",
                "",
                "}"
            )
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
            ),
            new KeyProperties(
                "<",
                ">"
            ),
            new KeyProperties(
                "Z"
            ),
            new KeyProperties(
                "X"
            ),
            new KeyProperties(
                "C"
            ),
            new KeyProperties(
                "V"
            ),
            new KeyProperties(
                "B"
            ),
            new KeyProperties(
                "N"
            ),
            new KeyProperties(
                "M"
            ),
            new KeyProperties(
                ",",
                ";"
            ),
            new KeyProperties(
                ".",
                ":"
            ),
            new KeyProperties(
                "-",
                "_"
            ),
            new KeyProperties(
                "",
                "",
                "",
                KeySize.BIGSHIFT,
                ["rShift"],
                "rShift"
            )
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
            ),
            new KeyProperties(
                "OS",
                "",
                "",
                KeySize.BIG,
                ["lOS"],
                "lOS"
            ),
            new KeyProperties(
                "Alt",
                "",
                "",
                KeySize.BIG
            ),
            new KeyProperties(
                "",
                "",
                "",
                KeySize.SPACEBAR,
                ["space"],
                "space"
            ),
            new KeyProperties(
                "Alt Gr",
                "",
                "",
                KeySize.BIG,
                ["altgraph"],
                "altgraph"
            ),
            new KeyProperties(
                "OS",
                "",
                "",
                KeySize.BIG,
                ["rOS"],
                "rOS"
            ),
            new KeyProperties(
                "Menu",
                "",
                "",
                KeySize.BIG
            ),
            new KeyProperties(
                "Ctrl",
                "",
                "",
                KeySize.BIG,
                ["rCtrl"],
                "rCtrl"
            )
        ]
    );
});
