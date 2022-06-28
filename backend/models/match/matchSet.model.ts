import {MatchModel} from "./match.model";
import {SetModel} from "./set.model";

export class MatchSetModel extends MatchModel{
    private _set: SetModel[] = [];

    get set(): SetModel[] {
        return this._set;
    }

    set set(value: SetModel[]) {
        this._set = value;
    }

    createMatchSet(matchId: string, date: number, matchType:string, totalAmount:number, isSet:boolean, sets: SetModel[]){
        this._matchId = matchId;
        this._date = date
        this._matchType = matchType
        this._totalAmount = totalAmount;
        this._isSet = isSet;
        this._set = sets
    }
}