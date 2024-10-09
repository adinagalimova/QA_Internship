import BasePage from '../../framework/page/BasePage.js';
import { Button, Label, Input, Dropdown } from '../../framework/elements/index.js';

class MainPage extends BasePage {
    constructor() {
        super(new Label('//span[contains(@class, "central-textlogo__image")]', 'Wikipedia Label'));
        this.inputField = new Input('//input[@id="searchInput"]', 'Input Field');
        this.forSubmitButton = new Button('//button[@type="submit"]', 'Search Button');
        this.searchLanguageButton = new Button('//div[@class="hide-arrow"]', 'Search Language Button');
        this.esLanguage = new Dropdown('//select[@id="searchLanguage"]', 'Es Language');
    }
    
    async inputTextIntoInputField(text) {
        await this.inputField.typeText(text);
    }

    async clickForSubmitButton() {
        await this.forSubmitButton.click();
    }

    async clickForSearchLanguageButton() {
        await this.searchLanguageButton.click();
    }

    async DropDownSelectOption(text) {
        await this.esLanguage.selectOptionByText(text)
    }
}

export default new MainPage();