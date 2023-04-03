class homePage{
    get #enterStoreAdress(){
        return $('id:button_login_store') // seletor id
    }

    // -----------------------------------------

    async click_enterStoreAdress(){
        await this.#enterStoreAdress.click()
    }
}
module.exports = new homePage