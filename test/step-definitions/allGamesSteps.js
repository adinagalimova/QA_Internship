import {When, Then } from '@wdio/cucumber-framework';
import { assert } from 'chai';
import AllGamesPage from '../pageObjects/AllGamesPage.js';

Then('All games page opened', async() => {
    assert.isTrue(await AllGamesPage.isPageOpened(), 'All Games Page Opened');
});

When(/^I input "(.*)" to search place$/, async(text) => {
    await AllGamesPage.inputTextToSearchPlace(text);
});

Then(/^"(.*)" title is displayed$/, async(text) => {
    assert.equal(await AllGamesPage.getGameName(), text, 'Game Names are equal');
})

Then(/^"(.*)" price is displayed$/, async(text) => {
    assert.equal(await AllGamesPage.getGamePrice(), text, 'Game prices are equal');
})




