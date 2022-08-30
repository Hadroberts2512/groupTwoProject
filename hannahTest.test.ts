import {HannahPage} from './hannahPageObjects'
const hannah = new HannahPage()

test('add to cart', async () => {
    await hannah.navigate()
    await hannah.setInput(hannah.userName, 'testingdev75@gmail.com')
    await hannah.setInput(hannah.passWord, 'HannahJJKoffi75')
    await hannah.click(hannah.signInSubmit)
    await hannah.click(hannah.searchInput)
    await hannah.setInput(hannah.searchInput, 'Women\n')
    await hannah.click(hannah.sorter)
    await hannah.click(hannah.sorter)
    await hannah.click(hannah.item)
    await hannah.click(hannah.addtoCart)

    await hannah.driver.sleep(4000)
    await hannah.driver.quit
    
})