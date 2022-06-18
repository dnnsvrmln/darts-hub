import {User} from "./User";

export class Match {
    private _matchId: number;
    private _date: number;
    private _matchType: MatchType;
    private _totalAmount: number;
    private _winner: User;


    constructor(matchId: number, date: number, matchType: MatchType, totalAmount: number, winner: User) {
        this._matchId = matchId;
        this._date = date;
        this._matchType = matchType;
        this._totalAmount = totalAmount;
        this._winner = winner;
    }

    get matchId(): number {
        return this._matchId;
    }

    set matchId(value: number) {
        this._matchId = value;
    }

    get date(): number {
        return this._date;
    }

    set date(value: number) {
        this._date = value;
    }

    get matchType(): MatchType {
        return this._matchType;
    }

    set matchType(value: MatchType) {
        this._matchType = value;
    }

    get totalAmount(): number {
        return this._totalAmount;
    }

    set totalAmount(value: number) {
        this._totalAmount = value;
    }

    get winner(): User {
        return this._winner;
    }

    set winner(value: User) {
        this._winner = value;
    }
}