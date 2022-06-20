
export class Match {
  private _matchId: String = '';
  private _date: Number = 0;
  private _matchType: String = '';
  private _totalAmount: Number = 0;
  private _isSet: Boolean = false;
  private _winner: String = '';


  constructor() {
  }

  get matchId(): String {
    return this._matchId;
  }

  set matchId(value: String) {
    this._matchId = value;
  }

  get date(): Number {
    return this._date;
  }

  set date(value: Number) {
    this._date = value;
  }

  get matchType(): String {
    return this._matchType;
  }

  set matchType(value: String) {
    this._matchType = value;
  }

  get totalAmount(): Number {
    return this._totalAmount;
  }

  set totalAmount(value: Number) {
    this._totalAmount = value;
  }

  get isSet(): Boolean {
    return this._isSet;
  }

  set isSet(value: Boolean) {
    this._isSet = value;
  }

  get winner(): String {
    return this._winner;
  }

  set winner(value: String) {
    this._winner = value;
  }
}
