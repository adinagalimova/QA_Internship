import path from 'path';
import Browser from '../../framework/browser/Browser.js';
import MainPage from '../pageObjects/MainPage.js';
import AlbertEinsteinPage from '../pageObjects/AlbertEinsteinPage.js';
import DownloadPage from '../pageObjects/DownloadPage.js';
import { assert } from 'chai';
import testData from '../testData/testData.js';

const downloadDir = './tmp';
const downloadedFilePath = path.join(downloadDir, testData.fileName);

describe('Framework Final with Wikipedia', function () {
    it('Download file', async () => {    
        // Step 1
        assert.isTrue(await MainPage.isMainPageOpened(), 'Main Page is not displayed');
        await MainPage.inputTextIntoInputField(testData.inputText);
        await MainPage.clickForSubmitButton();

        // Step 2
        await AlbertEinsteinPage.clickForToolButton();
        await AlbertEinsteinPage.clickForDownloadAsPDFButton();

        // Step 3
        await DownloadPage.clickForDownloadButton();
        await DownloadPage.downloadFile(testData.fileName);
        assert.isTrue(await Browser.File.isFileExist(downloadedFilePath), 'File is not downloaded');
    });
});