import Browser from '../../framework/browser/Browser.js'
import MainPage from '../pageObjects/MainPage.js'
import DifferentFramesPage from '../pageObjects/FramePages/DifferentFramesPage.js'
import TinyEditorPage from '../pageObjects/FramePages/TinyEditorPage.js'
import {assert} from 'chai'

const defaultInputText = 'Your content goes here.';

describe('iFrame test', function () {
    it('Interaction with text iFrame', async function () {
        await Browser.openUrl('https://the-internet.herokuapp.com/');
        await MainPage.clickNavigationLink('Frames');

        await DifferentFramesPage.clickIFrameButton();

        const iFrame = TinyEditorPage.iFrame.getPageUniqueElement();

        const randomString = crypto.randomUUID();
        
        //Implement missed steps
        await Browser.IFrame.switchToFrame(iframe);
        await TinyEditorPage.iFrame.inputTextIntoTextArea(randomString);
        assert.strictEqual(await TinyEditorPage.iFrame.getTextFromInputField(), `${defaultInputText}${randomString}`, 'Wrong message into input field')

        await Browser.IFrame.switchToParentFrame();

        assert.strictEqual(await TinyEditorPage.iFrame.getTextFromInputField(), `${defaultInputText}`, 'Wrong message into input field');
    })
})