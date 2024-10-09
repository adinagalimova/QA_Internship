import { Given, When } from '@wdio/cucumber-framework';
import MainPage from '../pageObjects/MainPage.js';
import { assert } from 'chai';
import { mainConfig } from '../../framework/configs/main.wdio.conf.js';
import Browser from '../../framework/browser/Browser.js';

Given('I am on the Wikipedia main page', async () => {
    await Browser.openUrl(mainConfig.baseUrl);
    assert.isTrue(await MainPage.isPageOpened(), 'Main Page is not displayed');
});

When(/^I input '(.*)' in the search field, I click the search button$/, async (inputText) => {
    await MainPage.inputTextIntoInputField(inputText);
    await MainPage.clickForSubmitButton();
});

When(/^I input '(.*)' in the search field$/, async (inputText) => {
    await MainPage.inputTextIntoInputField(inputText);
});

When(/^I change the language on '(.*)'$/, async (language) => {
    await MainPage.clickForSearchLanguageButton();
    await MainPage.DropDownSelectOption(language);
});
 
When('I click the submit button', async () => {
    await MainPage.clickForSubmitButton();
});