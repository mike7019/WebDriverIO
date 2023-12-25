const { $ } = require('@wdio/globals')
const Page = require('./page');


class LoginPage extends Page {
    
    get inputUsername () {
        return $('//input[@id="LoginPanel0_Username"]');
    }

    get inputPassword () {
        return $('//input[@id="LoginPanel0_Password"]');
    }

    get btnSubmit () {
        return $('button[type="submit"]');
    }

    
    async login (username, password) {
        await this.inputUsername.setValue(username);
        await this.inputPassword.setValue(password);
        await this.btnSubmit.click();
    }

    
    open () {
        return super.open('login');
    }
}

module.exports = new LoginPage();
