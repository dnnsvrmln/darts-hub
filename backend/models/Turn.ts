import {User} from "./User";

export class Turn {
    private _turnId: String;
    private _score: number;
    private _player: User;


    constructor(turnId: String, score: number, player: User) {
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

    get player(): User {
        return this._player;
    }

    set player(value: User) {
        this._player = value;
    }
}