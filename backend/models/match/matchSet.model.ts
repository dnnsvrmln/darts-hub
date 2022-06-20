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
}