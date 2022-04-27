class User {
    private _name: string;
    private _email: string


    constructor(email: string, name: string) {
        this._email = email;
        this._name = name;
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