import {LegModel} from "./leg.model";
import {PlayerModel} from "../player/player.model";

export class SetModel {
    private _setId: number;
    private _legs: [LegModel]
    private _winner: PlayerModel;

    constructor(setId: number, legs: [LegModel], winner: PlayerModel) {
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

    get legs(): [LegModel] {
        return this._legs;
    }

    set legs(value: [LegModel]) {
        this._legs = value;
    }

    get winner(): PlayerModel {
        return this._winner;
    }

    set winner(value: PlayerModel) {
        this._winner = value;
    }
}