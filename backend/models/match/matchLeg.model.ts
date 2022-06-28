import {LegModel} from "./leg.model";
import {MatchModel} from "./match.model";

export class MatchLegModel extends MatchModel{
    private _Leg: LegModel[] = [];

    get Leg(): LegModel[] {
        return this._Leg;
    }

    set Leg(value: LegModel[]) {
        this._Leg = value;
    }
}