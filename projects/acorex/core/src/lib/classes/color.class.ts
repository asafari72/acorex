export interface AXColor {
    id?: string;
    color: string;
    code: string;
    selected?: boolean;
    active?: boolean;
}

export class AXColorUtil {


    static hex2Rgb(hexColor: string) {
        const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hexColor);
        return result ? {
            r: parseInt(result[1], 16),
            g: parseInt(result[2], 16),
            b: parseInt(result[3], 16)
        } : null;
    }

    static illuminance(hexColor: string) {
        const rgbColor = AXColorUtil.hex2Rgb(hexColor);
        if (!rgbColor) {
            return -1;
        }
        const r = rgbColor.r;
        const g = rgbColor.g;
        const b = rgbColor.b;
        const a = [r, g, b].map(v => {
            v /= 255;
            return (v <= 0.03928) ?
                v / 12.92 :
                Math.pow(((v + 0.055) / 1.055), 2.4);
        });
        return a[0] * 0.2126 + a[1] * 0.7152 + a[2] * 0.0722;
    }

    static contrastToWhite(hexColor: string) {
        const whiteIlluminance = 1;
        const illuminance = AXColorUtil.illuminance(hexColor);
        return whiteIlluminance / illuminance;
    }

}
