import {Leg} from "./Leg";
import {Match} from "./Match";
import {User} from "./User";

export class MatchLeg extends Match{
    private _Leg: [Leg];

    constructor(matchId: number, date: number, matchType: MatchType, totalAmount: number, winner: User, Leg: [Leg]) {
        super(matchId, date, matchType, totalAmount, winner);
        this._Leg = Leg;
    }

    get Leg(): [Leg] {
        return this._Leg;
    }

    set Leg(value: [Leg]) {
        this._Leg = value;
    }
}