import BasePage from '../../framework/page/BasePage.js';
import {Label, Button} from '../../framework/elements/index.js';

class MainPage extends BasePage {
    constructor() {
        super(new Label('//span[contains(@class, "MenuItem_page-group-heading")]', 'Our Games Label'));
        this.navigationButton = (text)=> new Button(`//span[text()="${text}"]`, 'Navigation Button'); 
}

async clickNavigationItem(text) {
    await this.navigationButton(text).click();
}
}

export default new MainPage();