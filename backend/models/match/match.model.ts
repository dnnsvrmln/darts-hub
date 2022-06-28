
export class Match {
    protected _matchId: string = '';
    protected _date: number = 0;
    protected _matchType: string = '';
    protected _totalAmount: number = 0;
    protected _isSet: boolean = false;
    protected _winner: string = '';


    constructor() {
    }

    get matchId(): string {
        return this._matchId;
    }

    set matchId(value: string) {
        this._matchId = value;
    }

    get date(): number {
        return this._date;
    }

    set date(value: number) {
        this._date = value;
    }

    get matchType(): string {
        return this._matchType;
    }

    set matchType(value: string) {
        this._matchType = value;
    }

    get totalAmount(): number {
        return this._totalAmount;
    }

    set totalAmount(value: number) {
        this._totalAmount = value;
    }

    get isSet(): boolean {
        return this._isSet;
    }

    set isSet(value: boolean) {
        this._isSet = value;
    }

    get winner(): string {
        return this._winner;
    }

    set winner(value: string) {
        this._winner = value;
    }

    createNewMatch(matchId: string, date: number, matchType: string, totalAmount:number, isSet: boolean){
        this._matchId = matchId
        this._date = date
        this._matchType = matchType
        this._totalAmount = totalAmount
        this._isSet = isSet
    }
}