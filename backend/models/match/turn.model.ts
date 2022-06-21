import {PlayerModel} from "../player/player.model";

export class TurnModel {
    private _turnId: String;
    private _score: number;
    private _player: PlayerModel;
    
    constructor(turnId: String, score: number, player: PlayerModel) {
        this._turnId = turnId;
        this._score = score;
        this._player = player;
    }

    get turnId(): String {
        return this._turnId;
    }

    set turnId(value: String) {
        this._turnId = value;
    }

    get score(): number {
        return this._score;
    }

    set score(value: number) {
        this._score = value;
    }

    get player(): PlayerModel {
        return this._player;
    }

    set player(value: PlayerModel) {
        this._player = value;
    }
}