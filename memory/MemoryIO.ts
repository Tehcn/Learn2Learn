import { readFile } from 'fs'

import { MemoryFile } from './MemoryFile';
import { MemoryError } from './MemoryError';

import { Hex } from './Hex';

class MemoryIO {
    private _memoryFile: MemoryFile;

    public static codes = {
        "0x": "start",
        ";": "end"
    };

    constructor(path?: string) {
        if (path) this._memoryFile = { path: path };
        else this._memoryFile = { path: "./main.memory" };
    }

    Read(): Array<Hex> {
        let hexData: Array<Hex> = new Array<Hex>();
        readFile(this._memoryFile.path, { encoding: "hex" }, (err, data) => {
            if (err) throw new MemoryError(err);

        });

        return hexData;
    }

    Write(data: Hex) {

    }
}

export { MemoryIO };
export default MemoryIO;