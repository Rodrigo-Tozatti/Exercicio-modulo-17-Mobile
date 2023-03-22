class inicialPage{
    get #enterStoreAdress(){
        return $('id:button_login_store')
    }

    async click_enterStoreAdress(){
        this.#enterStoreAdress.click()
    }
}
module.exports = new inicialPage()