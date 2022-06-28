export class Player {
    protected _playerName: string = ""
    protected _email: string = ""
    protected _localId: string = ""

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

    get localId(): string {
        return this._localId;
    }

    set localId(value: string) {
        this._localId = value;
    }

    createPlayer(playerName: string, email: string, localId: string){
        this._playerName = playerName;
        this._email = email;
        this._localId = localId;
    }
}