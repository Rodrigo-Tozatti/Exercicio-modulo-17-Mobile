class ebacShop{
    get #MyStore(){
        return $('id:toolbar_subtitle') // seletor id
    }
    get #MyStoreLogo(){
        return $('~My store') // seletor assessibility id
    }
    get #config(){
        return $('//android.widget.TextView[@content-desc="Settings"]') // seletor xpath
    }
    get #logout(){
        return $('//android.widget.Button') // seletor xpath
    }
    get #confirmLogout(){
        return $('id:android:id/button1') // seletor id
    }

    // -----------------------------------------

    async validar_texto_myStore(){
        return await this.#MyStore.getText() // retornar valor para validar ação | procurar no site do Webdriveio em API / elements
    }
    async validar_display_myStore(){
        await this.#MyStoreLogo.waitForExist()
        return await this.#MyStoreLogo.isDisplayed() // validar display
    }
    /*async click_config(){
        await this.#config.click()
    }
    async click_logout(){
        await this.#logout.click()
    }
    async click_confirmLogout(){
        await this.#confirmLogout.click()
    }*/
}
module.exports = new ebacShop
