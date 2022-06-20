import {PlayerModel} from "../model/player/player.model";

export class LegModel {
  constructor(
    public turnId: string,
    public score: number,
    public player: PlayerModel,
    private _token: string,
    private _tokenExpirationDate: Date
  ) {}

  get token() {
    if (!this._tokenExpirationDate || new Date() > this._tokenExpirationDate) {
      return null;
    }
    return this._token;
  }
}
