import BasePage from '../../framework/page/BasePage.js';
import { Button, Label, Input } from '../../framework/elements/index.js';
import { PreciseTextLocator } from '../../framework/utils/locatorHelper.js';

class AlbertEinsteinPage extends BasePage {
    constructor() {
        super(new Label(PreciseTextLocator('Albert Einstein')), 'Albert Einstein Page');
        this.forToolButton = new Button('(//nav[@class="vector-page-tools-landmark"])[1]', 'Tool Button');
        this.forDownloadAsPDFButton = new Button('//a[@title="Download this page as a PDF file"]', 'Download As PDF Button');
    }

    async clickForToolButton() {
        await this.forToolButton.click();
    }

    async clickForDownloadAsPDFButton() {
        await this.forDownloadAsPDFButton.click();
    }
}

export default new AlbertEinsteinPage();