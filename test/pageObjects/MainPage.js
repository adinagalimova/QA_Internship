import BasePage from '../../framework/page/BasePage.js';
import { Button, Label, Input } from '../../framework/elements/index.js';
import { PreciseTextLocator } from '../../framework/utils/locatorHelper.js';

class MainPage extends BasePage {
    constructor() {
        super(new Label(PreciseTextLocator('Wikipedia'), 'Welcome Label'), 'Main Page');
        
        this.mainPageLabel = new Label('(//*[text()="English"])[1]', 'Main Page Label');

        this.inputField = new Input('//input[@id="searchInput"]', 'Input Field');
        this.forSubmitButton = new Button('//button[@type="submit"]', 'Search Button');
    }

    async isMainPageOpened() {
        return await this.mainPageLabel.state().isDisplayed();
    }

    async inputTextIntoInputField(text) {
        await this.inputField.typeText(text);
    }

    async clickForSubmitButton() {
        await this.forSubmitButton.click();
    }
}

export default new MainPage();