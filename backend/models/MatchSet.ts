import {Match} from "./Match";
import {Set} from "./Set";
import {Player} from "./Player";

export class MatchSet extends Match{
    private _set: Set[] = [];


    get set(): Set[] {
        return this._set;
    }

    set set(value: Set[]) {
        this._set = value;
    }
}