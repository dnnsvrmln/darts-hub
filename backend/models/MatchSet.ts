import {Match} from "./Match";
import {Set} from "./Set";

export class MatchSet extends Match{
    private _set: Set[] = [];


    get set(): Set[] {
        return this._set;
    }

    set set(value: Set[]) {
        this._set = value;
    }

    createMatchSet(matchId: string, date: number, matchType:string, totalAmount:number, isSet:boolean, sets: Set[]){
        this._matchId = matchId;
        this._date = date
        this._matchType = matchType
        this._totalAmount = totalAmount;
        this._isSet = isSet;
        this._set = sets
    }
}