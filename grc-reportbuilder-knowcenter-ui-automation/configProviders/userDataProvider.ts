import { default as userData } from "../config/userData.json";


export class userDataProvider {

    private UserName: string;
    private Password: string;

    constructor(User: string) {
        this.UserName = userData[User].userName;
        this.Password = userData[User].password;
    }

    get userName() {
        return this.UserName;
    }

    get userPassword() {
        return this.Password;
    }
}