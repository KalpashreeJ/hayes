export class LoginControls {

    constructor() {
        
    }
    
    get userNameField() {
        return "//input[@id='username']";
    }

    get passwordField() {
        return "//input[@id='password']";
    } 
    
    get loginButton() {
        return "//button[contains(@class, 'tm-login-button')]";
    }
}