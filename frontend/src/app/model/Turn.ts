

export class Turn {
    private _turnId: String = '';
    private _score: Number = 0;
    private _player: String = '';


    constructor() {
    }

    get turnId(): String {
        return this._turnId;
    }

    set turnId(value: String) {
        this._turnId = value;
    }

    get score(): Number {
        return this._score;
    }

    set score(value: Number) {
        this._score = value;
    }

    get player(): String {
        return this._player;
    }

    set player(value: String) {
        this._player = value;
    }
}
