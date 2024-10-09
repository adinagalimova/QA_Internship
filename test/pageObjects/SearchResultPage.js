import BasePage from '../../framework/page/BasePage.js';
import { Button, Label, Input } from '../../framework/elements/index.js';
import { PreciseTextLocator } from '../../framework/utils/locatorHelper.js';

class SearchRessultPage extends BasePage {
    constructor() {
        super(new Label('//span[@class="mw-page-title-main"]', 'Article Page Label'));
        this.forToolButton = new Button('(//nav[@class="vector-page-tools-landmark"])[1]', 'Tool Button');
        this.forDownloadAsPDFButton = new Button('//a[@title="Download this page as a PDF file"]', 'Download As PDF Button');
        this.pageInformationButton = new Button('//span[text()="Page information"]', 'Page Information Button');
        this.informationPageLabel = new Label('//tr[@id="mw-pageinfo-display-title"]', 'Page Information Label');
    }

    async clickForToolButton() {
        await this.forToolButton.click();
    }

    async clickForDownloadAsPDFButton() {
        await this.forDownloadAsPDFButton.click();
    }

    async clickForPageInformationButton() {
        await this.pageInformationButton.click();
    }

    async isInformationPageOpened() {
        return await this.informationPageLabel.state().isDisplayed();
    }
}

export default new SearchRessultPage();