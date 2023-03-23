class loginPage{
    get #enterSiteAdress(){
        return $('id:textinput_placeholder')
    }
    get #continue(){
        return $('id:bottom_button')
    }

    // -------------------------------------------

    async enter_enterSiteAdress(site){
        await this.#enterSiteAdress.setValue(site)
    }
    async click_continue(){
        await this.#continue.click()
    }
}
module.exports = new loginPage

