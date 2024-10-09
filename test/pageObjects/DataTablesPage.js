import { Label, Table } from '../../framework/elements/index.js'
import BasePage from '../../framework/page/BasePage.js'
import { PreciseTextLocator } from '../../framework/utils/locatorHelper.js'

class DataTablesPage extends BasePage {
    constructor() {
        //Change call of supre() constructor to approriate one
        super(new Label(PreciseTextLocator('Data Tables'), 'Data Tables Label'), 'Data Tables Page');

        this.firstExampleTable = new Table('//*[@id="table1"]', 'First Table Example');
    }

    async getColumnValues() {
        const table = await this.firstExampleTable.parseTableContent();
        console.log(table);
        //Return array of Due values
    }
}

export default new DataTablesPage();