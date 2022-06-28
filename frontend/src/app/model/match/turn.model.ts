export class TurnModel {
    private _score: Number = 0;
    private _multiplier: Number = 0;
    private _player: String = "";


  createTurn( score:number, multiplier:number, player:String ) {
    this._score = score
    this._multiplier = multiplier
    this._player = player
  }

  constructor() {}

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
