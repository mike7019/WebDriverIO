const { Given, When, Then } = require('@wdio/cucumber-framework')
const LoginPage = require('../test/pageobjects/login.page')
const DashboardPage = require('../test/pageobjects/dashboard.page')

Given('that the user is on the site', async () =>{
    await LoginPage.open();
});

When('types the valid credentials', async () =>{
    await LoginPage.login('admin', 'serenity')
});

Then('will see the text on screen', async () =>{
    await expect(DashboardPage.getHeaderText).toHaveText('Dashboard')
});
