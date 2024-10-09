import BasePage from '../../framework/page/BasePage.js';
import { Button, Label, Input } from '../../framework/elements/index.js';
import { PreciseTextLocator } from '../../framework/utils/locatorHelper.js';

class DownloadPage extends BasePage {
    constructor() {
        super (new Label(PreciseTextLocator('Download as PDF')), 'Download Page');
        this.forDownloadButton = new Button('//span[@class="oo-ui-labelElement-label"]', 'Download Button');
        this.fileLabel = (text) => new Label(PreciseTextLocator(text), 'File Label');
    }
    
    async clickForDownloadButton() {
        await this.forDownloadButton.click();
    }

    async downloadFile(fileName) {
        this.fileLabel(fileName).click();
    }
}

export default new DownloadPage();