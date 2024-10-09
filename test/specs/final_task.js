import { expect, $, $$ } from '@wdio/globals'

describe('iFrame test', () => {
    it('check that first level header on example page is displayed', async () => {
    const iframe = await $('iframe[title="W3Schools HTML Tutorial"]')
    await browser.switchToFrame(iframe)
    //step 1
    await expect($('//h1[text()="HTML"]')).toExist()

    //step 2 
    await $('//a[@class="ga-nav" and @title="CSS Tutorial"]').click()
    await expect($('//h1[text()="CSS "]')).toExist()
    await browser.switchToParentFrame()

    //step 3
    await expect($('//h1[text()="HTML "]')).toExist()
    })
})