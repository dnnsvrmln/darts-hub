import {Leg} from "./Leg";
import {Match} from "./Match";
import {Player} from "./Player";

export class MatchLeg extends Match{
    private _Leg: Leg[] = [];


    get Leg(): Leg[] {
        return this._Leg;
    }

    set Leg(value: Leg[]) {
        this._Leg = value;
    }
}