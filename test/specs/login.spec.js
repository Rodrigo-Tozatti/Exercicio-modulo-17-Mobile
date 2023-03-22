const telaInicialPage = require("../pageobjects/tela-inicial.page");

describe('Acessar loja virtual EBAC', () => {
    it('Fazer login com sucesso', async () => {
        await telaInicialPage.click_enterStoreAdress()
        
    });
    
})
