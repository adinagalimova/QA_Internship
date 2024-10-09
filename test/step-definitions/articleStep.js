import { When, Then } from '@wdio/cucumber-framework'
import SearchResultPage from '../pageObjects/SearchResultPage.js';
import { assert } from 'chai';

When('I click the "Tool menu" button on the article page', async () => {
    await SearchResultPage.clickForToolButton();
});

When('I click the "Download as PDF" button', async () => {
    await SearchResultPage.clickForDownloadAsPDFButton();
});

When('I click the "Page information" button', async () => {
    await SearchResultPage.clickForPageInformationButton();
});

Then('Information page is displayed', async() => {
    assert.isTrue(await SearchResultPage.isInformationPageOpened(), 'Information Page is not displayed');
})

Then('Language page is displayed', async() => {
    assert.isTrue(await SearchResultPage.isPageOpened(), 'Language Page is not displayed');
})



