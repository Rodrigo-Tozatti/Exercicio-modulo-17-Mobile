class loginPage{
    get #siteAdress(){
        return $('android.widget.EditText') // seletor class
    }
    get #continue(){
        return $('id:bottom_button') // sletor id
    }
    get #storeCredentials(){
        return $('//android.widget.Button[3]') // sletor xpath
    }
    get #username(){
        return $('android=new UiSelector().text("Username")') // sletor text entrar com $('android=new UiSelector().text("SELETOR TEXT")')   
    }
    get #password(){
        return $('android=new UiSelector().text("Password")') // sletor text entrar com $('android=new UiSelector().text("SELETOR TEXT")')   
    }
    get #yourPassword(){
        return $('id:login_enter_password')
    }
    get #twoPassword(){
        return $('android=new UiSelector().text("Password")')
    }
    

    // -------------------------------------------

    async enter_siteAdress(site){
        await this.#siteAdress.setValue(site)
    }
    async click_continue(){
        await this.#continue.click()
    }
    async click_storeCredentials(){
        await this.#storeCredentials.click()
    }
    async enter_login(username, password){
        await this.#username.setValue(username)
        await this.#password.setValue(password)  // três ações em um await
        await this.#continue.click()
    }
    async click_yourPassword(){
        await this.#yourPassword.click()
    }
    async enter_twopassword(password){
        await this.#twoPassword.setValue(password)
    }
}
module.exports = new loginPage