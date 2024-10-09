import { Given, When, Then } from '@wdio/cucumber-framework';
import MainPage from '../pageObjects/MainPage.js';
import { assert } from 'chai';
import { mainConfig } from '../../framework/configs/main.wdio.conf.js';
import Browser from '../../framework/browser/Browser.js';

Given('I am on the Main Page', async () => {
    Browser.openUrl(mainConfig.baseUrl);
    assert.isTrue(await MainPage.isPageOpened(), 'Main Page Opened');
    console.log(process.env.Char)
});

When(/^I click the "(.*)" button$/, async (text) => {
    await MainPage.clickNavigationItem(text);
})
