/// <reference types="cypress" />
import * as indexPage from "../pages/login-and-index-pages/index-page"
import * as loginPage from "../pages/login-and-index-pages/login-page"

var faker = require('faker');

let randomUsername = faker.internet.userName();
let randomPassword = faker.internet.password();
describe("Testsuite with Percy.io", () => {
    beforeEach (() => {
        cy.visit('http://localhost:3000')
    })

    it('Perform login with valid inputs', () => {
         // ->>we are at index (login) page!
         cy.log('At login page!')
         cy.percySnapshot('index-page')
        loginPage.checkLoginPageTitle()
        loginPage.performValidLogin('tester01', 'GteteqbQQgSr88SwNExUQv2ydb7xuf8c', 'Tester Hotel Overview')
        // ->>we are at dashboard page!
        cy.log('At dashboard page!')
        cy.percySnapshot('dashhboard-page')
        indexPage.performLogout('Login')
    })


    it('Perform login with invalid inputs', () => {
        loginPage.checkLoginPageTitle()
        loginPage.performInvalidLogin(randomUsername, randomPassword, 'Bad username or password')
    })

    it('Perform login with invalid username', () => {
        loginPage.checkLoginPageTitle()
        loginPage.performInvalidLogin(randomUsername, '123', 'Bad username or password')
    })

    it('Perform login with invalid password', () => {
        loginPage.checkLoginPageTitle()
        loginPage.performInvalidLogin('tester01', randomPassword, 'Bad username or password')
    })
    it('Perform login without entering username', () => {
        loginPage.checkLoginPageTitle()
        loginPage.performLoginNoUsername('GteteqbQQgSr88SwNExUQv2ydb7xuf8c', 'Bad username or password')
    })
    it('Perform login without entering password', () => {
        loginPage.checkLoginPageTitle()
        loginPage.performLoginNoPassword('tester01', 'Bad username or password')
    })


})