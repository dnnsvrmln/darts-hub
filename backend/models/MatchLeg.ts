import {Leg} from "./Leg";
import {Match} from "./Match";
import {Player} from "./Player";

export class MatchLeg extends Match{
    private _leg: Leg[] = [];


    get Leg(): Leg[] {
        return this._leg;
    }

    set Leg(value: Leg[]) {
        this._leg = value;
    }

    createMatchLeg(matchId: string, date: number, matchType:string, totalAmount:number, isSet:boolean, legs: Leg[]){
        this._matchId = matchId;
        this._date = date
        this._matchType = matchType
        this._totalAmount = totalAmount;
        this._isSet = isSet;
        this._leg = legs
    }
}