export class User {
    private _userName: string;
    private _name: string;
    private _email: string

    constructor(userName: string, email: string, name: string) {
        this._userName = userName;
        this._email = email;
        this._name = name;
    }


    get userName(): string {
        return this._userName;
    }

    set userName(value: string) {
        this._userName = value;
    }

    get name(): string {
        return this._name;
    }

    set name(value: string) {
        this._name = value;
    }

    get email(): string {
        return this._email;
    }

    set email(value: string) {
        this._email = value;
    }
}