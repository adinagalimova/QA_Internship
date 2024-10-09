import { expect, $, $$ } from '@wdio/globals'

const expectedSum = 251;
const currencySign = '$';

describe('Data Table test', () => {
    it('sum of Due values should be correct', async () => {
        await $('[href="/tables"]').click()

        //get Due column elements
        let dueItems = await $$('//*[@id="table1"]//td[4]')
        let actualSum = 0

        for await (let item of dueItems) {
            //get value in the column
            let text = await item.getText() 
            //increase actualSum with value without currencySign
            actualSum += +(text.replace(currencySign, ''))
        }

        expect(actualSum).toEqual(expectedSum)
    })
})

