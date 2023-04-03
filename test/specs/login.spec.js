const ebacShopPage = require("../pageobjects/ebac-shop.page");
const homePage = require("../pageobjects/home.page");
const loginPage = require("../pageobjects/login.page");

var site = 'http://lojaebac.ebaconline.art.br/'
var usuario = 'gerente'
var senha = 'GD*peToHNJ1#c$sgk08EaYJQ'

describe('Fazer login com credenciais EBAC', () => {
    it('Deve fazer o login com sucesso', async () => {
        
        await homePage.click_enterStoreAdress()

        await loginPage.enter_siteAdress(site)
        await loginPage.click_continue()
        await loginPage.click_storeCredentials()
        await loginPage.enter_login(usuario, senha) // passsando três ações em um await
        await loginPage.click_yourPassword()
        await loginPage.enter_twopassword(senha)
        await loginPage.click_continue()

        expect(await ebacShopPage.validar_display_myStore()).toBeTruthy // Validando por texto
        expect(await ebacShopPage.validar_texto_myStore()).toEqual('EBAC - Shop') // Validando por texto
        
    });
    
});