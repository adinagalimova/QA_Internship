import BasePage from '../../framework/page/BasePage.js';
import {Label, Input} from '../../framework/elements/index.js';

class AllGamesPage extends BasePage {
    constructor() {
        super(new Label('//div[contains(@class, "TopModule_show-on-med")]', 'All Games Label'));
        this.searchPlace = new Input('//input[@id="search"]', 'Serch');
        this.gameName = new Label('//h2[@id="victoria-3-voice-of-the-people"]', 'Game Name');
        this.gamePrice = new Label('//span[@data-testid="price"]', 'Game Price');
}

async inputTextToSearchPlace(text) {
    await this.searchPlace.typeText(text);
}

async getGameName() {
    return await this.gameName.getText();
}

async getGamePrice() {
    return await this.gamePrice.getText();
}

}

export default new AllGamesPage();
