import {Turn} from "./Turn";

export class Leg {
    private _legId: String;
    private _average: number;
    private _scoreType: ScoreType;
    private _turn: Turn


    constructor(legId: String, average: number, scoreType: ScoreType, turn: Turn) {
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

    get average(): number {
        return this._average;
    }

    set average(value: number) {
        this._average = value;
    }

    get scoreType(): ScoreType {
        return this._scoreType;
    }

    set scoreType(value: ScoreType) {
        this._scoreType = value;
    }

    get turn(): Turn {
        return this._turn;
    }

    set turn(value: Turn) {
        this._turn = value;
    }
}