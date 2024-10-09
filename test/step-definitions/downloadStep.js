import { When, Then } from '@wdio/cucumber-framework'
import path from 'path';
import { assert } from 'chai';
import DownloadPage from '../pageObjects/DownloadPage.js';
import Browser from '../../framework/browser/Browser.js'
const downloadDir = './tmp';

When('I click the "Download" button', async () => {
    await DownloadPage.clickForDownloadButton();    
})

Then(/^the file should be downloaded with the name '(.*)'$/, async(fileName) => {
    const downloadedFilePath = path.join(downloadDir, fileName);
    await DownloadPage.downloadFile(fileName);
    assert.isTrue(await Browser.File.isFileExist(downloadedFilePath), 'File is not downloaded');
})