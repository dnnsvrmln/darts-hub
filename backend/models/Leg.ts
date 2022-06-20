import {Turn} from "./Turn";

export class Leg {
    private _legId: String;
    private _average: Number;
    private _scoreType: String;
    private _turn: Turn


    constructor(legId: String, average: Number, scoreType: String, turn: Turn) {
        this._legId = legId;
        this._average = average;
        this._scoreType = scoreType;
        this._turn = turn;
    }


    get legId(): String {
        return this._legId;
    }

    set legId(value: String) {
        this._legId = value;
    }

    get average(): Number {
        return this._average;
    }

    set average(value: Number) {
        this._average = value;
    }

    get scoreType(): String {
        return this._scoreType;
    }

    set scoreType(value: String) {
        this._scoreType = value;
    }

    get turn(): Turn {
        return this._turn;
    }

    set turn(value: Turn) {
        this._turn = value;
    }
}