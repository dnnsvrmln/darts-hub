import {Leg} from "./Leg";
import {User} from "./User";

export class Set {
    private _setId: number;
    private _legs: [Leg]
    private _winner: User;

    constructor(setId: number, legs: [Leg], winner: User) {
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

    get winner(): User {
        return this._winner;
    }

    set winner(value: User) {
        this._winner = value;
    }
}