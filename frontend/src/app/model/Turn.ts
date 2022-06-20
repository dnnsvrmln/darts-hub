export class Turn {
    private _score: Number = 0;
    private _multiplier: Number = 0;
    private _player: String = "";
    private _turnTotalPlayerOne:Number = 0

  constructor() {

  }


  get score(): Number {
    return this._score;
  }

  set score(value: Number) {
    this._score = value;
  }

  get multiplier(): Number {
    return this._multiplier;
  }

  set multiplier(value: Number) {
    this._multiplier = value;
  }

  get player(): String {
    return this._player;
  }

  set player(value: String) {
    this._player = value;
  }
}
