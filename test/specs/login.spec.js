const homePage = require("../pages/home.page");
const loginPage = require("../pages/login.page");

describe('Acessar loja virtual EBAC', () => {
    it('Fazer login com sucesso', async () => {
        await homePage.click_enterStoreAdress()

        await loginPage.enter_enterSiteAdress('www.lojaebac.ebaconline.art.br/')
        await loginPage.click_continue()
    });
    
})