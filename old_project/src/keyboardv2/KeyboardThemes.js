
const WHITE = 0;
const LIGHT = 1;
const DARK = 2;
const EXTRA_DARK = 3;

class KeyboardTheme {
    constructor(baseColor = "#ffc800", schemeType = LIGHT, detailColor = "#ff306b") {
        this.baseColor = rgbToHSV(baseColor);
        this.detailColor = rgbToHSV(detailColor);
        this.schemeType = schemeType;
    }

    getBaseColor() {
        return this.baseColor;
    }

    getDetailColor() {
        return this.detailColor;
    }

    getSchemeType() {
        return this.schemeType;
    }

}

function rgbToHSV(hexColor) {
    let r = parseInt(hexColor.substring(1, 3), 16);
    let g = parseInt(hexColor.substring(3, 5), 16);
    let b = parseInt(hexColor.substring(5, 7), 16);
    let a = parseInt(hexColor.substring(7, 9), 16);

    console.log(r, g, b, a);

    r /= 255;
    g /= 255;
    b /= 255;

    let max = Math.max(r, g, b);
    let min = Math.min(r, g, b);

    let h = 0;
    let s = 0;
    let v = max;

    let d = max - min;
    s = max === 0 ? 0 : d / max;

    if (max === min) {
        h = 0; // achromatic
    } else {
        switch (max) {
            case r:
                h = (g - b) / d + (g < b ? 6 : 0);
                break;
            case g:
                h = (b - r) / d + 2;
                break;
            case b:
                h = (r - g) / d + 4;
                break;
        }

        h /= 6;
    }

    return [h, s, v];
}

export const KeyboardThemes = {
    REGULAR: new KeyboardTheme("#ffc800", LIGHT, "#ff306b")
}