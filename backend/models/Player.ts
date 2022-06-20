export class Player {
    constructor(
        public _playerName: string,
        public _email: string,
        public _localId: string
    ) {}


    get playerName(): string {
        return this._playerName;
    }

    set playerName(value: string) {
        this._playerName = value;
    }

    get email(): string {
        return this._email;
    }

    set email(value: string) {
        this._email = value;
    }

    get localId(): string {
        return this._localId;
    }

    set localId(value: string) {
        this._localId = value;
    }
}