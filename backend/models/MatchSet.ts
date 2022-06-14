import {Match} from "./Match";
import {Set} from "./Set";
import {User} from "./User";

export class MatchSet extends Match{
    private _set: [Set];

    constructor(matchId: number, date: number, matchType: MatchType, totalAmount: number, winner: User, set: [Set]) {
        super(matchId, date, matchType, totalAmount, winner);
        this._set = set;
    }

    get set(): [Set] {
        return this._set;
    }

    set set(value: [Set]) {
        this._set = value;
    }
}