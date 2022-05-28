export class UserModel {
    constructor(
        private _username: string,
        private _email: string,
        private _password: string,
        private _token: string,
        private _tokenExpirationDate: Date
    ) {}

    get username(): string {
        return this._username;
    }

    set username(value: string) {
        this._username = value;
    }

    get email(): string {
        return this._email;
    }

    set email(value: string) {
        this._email = value;
    }

    get password(): string {
        return this._password;
    }

    set password(value: string) {
        this._password = value;
    }

    get token() {
        if ((!this._tokenExpirationDate) || (new Date() > this._tokenExpirationDate)) {
            return null;
        }
        return this._token;
    }
}