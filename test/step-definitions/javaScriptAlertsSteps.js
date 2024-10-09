import { Then, When } from '@wdio/cucumber-framework'
import { assert } from 'chai'

import JavaScriptAlertsPage from '../page-objects/javaScriptAlertsPage.js'

//to implement
When('I open a js alert', async() => {
    await JavaScriptAlertsPage.clickForJSAlertButton();
})

When('I accept the js alert', async() => {
    await JavaScriptAlertsPage.acceptJSAlert();
})

When(/^I should see a success message '(.*)'$/, async(message) => {
    assert.strictEqual(await JavaScriptAlertsPage.getResultText(), message, 'Wrong result');
})