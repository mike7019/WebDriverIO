const { expect } = require('@wdio/globals')
const LoginPage = require('../pageobjects/login.page')
const SecurePage = require('../pageobjects/secure.page')
const dashboardPage = require('../pageobjects/dashboard.page')

describe('My Login application', () => {
    it('should login with valid credentials', async () => {
        await LoginPage.open()

        await LoginPage.login('admin', 'serenity')
        await expect(dashboardPage.getHeaderText).toBeExisting()
    })
})

