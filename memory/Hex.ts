import { Buffer } from 'buffer';

class Hex {
    public data: string;
    constructor(data: string) {
        if (!this.validate(data)) throw new HexError(data);
        this.data = data;
        console.log(`Data: ${data}\nBufferedData: ${Buffer.from(this.data)}`);
    }

    validate(data: string): boolean {
        let chars: string[] = data.split('');
        let valid: boolean = true;

        for (const char in chars) {
            if (char.match(/^(?:0[xX]?)?[0-9a-fA-F]*$/igm)) continue;
            valid = false;
            break;
        }

        return valid;
    }
}

class HexError extends Error {
    constructor(data: string) {
        super();
        console.error(data);
    }
}

export { Hex, HexError };
export default Hex;