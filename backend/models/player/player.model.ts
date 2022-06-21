export class PlayerModel {
    constructor(
        public _playerUID: string,
        public _playerName: string,
        public _email: string
    ) {}

    get playerUID(): string {
        return this._playerUID;
    }

    set playerUID(value: string) {
        this._playerUID = value;
    }

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
}