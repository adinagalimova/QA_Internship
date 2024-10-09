import { Then } from '@wdio/cucumber-framework'
import { assert } from 'chai'

import DataTablesPage from '../page-objects/dataTablesPage.js'

const currencySign = '$';

//to implement
Then(/^Sum of Due column values should be (\d+)$/, async (expectedSum) => {
    const dueArray = await (await DataTablesPage.getColumnValues()).map(element => parseFloat(element.replace(currencySign, '')));
    const dueSum = dueArray.reduce((accumulator, currentValue) => accumulator + currentValue);

    assert.strictEqual(dueSum, expectedSum, 'Sum of due column values is not correct');
})