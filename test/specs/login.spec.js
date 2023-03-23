const homePage = require("../pages/home.page");

describe('Acessar loja virtual EBAC', () => {
    it('Fazer login com sucesso', async () => {
        await homePage.click_enterStoreAdress()
        
    });
    
})