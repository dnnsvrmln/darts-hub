import {LegModel} from "./leg.model";
import {MatchModel} from "./match.model";

export class MatchLegModel extends MatchModel{
    private _leg: LegModel[] = [];

    get Leg(): LegModel[] {
        return this._leg;
    }

    set Leg(value: LegModel[]) {
        this._leg = value;
    }

    createMatchLeg(matchId: string, date: number, matchType:string, totalAmount:number, isSet:boolean, legs: LegModel[]){
        this._matchId = matchId;
        this._date = date
        this._matchType = matchType
        this._totalAmount = totalAmount;
        this._isSet = isSet;
        this._leg = legs
    }
}