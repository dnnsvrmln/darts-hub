import {Leg} from "./Leg";
import {Player} from "./Player";

export class Set {
    private _setId: number;
    private _legs: [Leg]
    private _winner: Player;

    constructor(setId: number, legs: [Leg], winner: Player) {
        this._setId = setId;
        this._legs = legs;
        this._winner = winner;
    }

    get setId(): number {
        return this._setId;
    }

    set setId(value: number) {
        this._setId = value;
    }

    get legs(): [Leg] {
        return this._legs;
    }

    set legs(value: [Leg]) {
        this._legs = value;
    }

    get winner(): Player {
        return this._winner;
    }

    set winner(value: Player) {
        this._winner = value;
    }
}