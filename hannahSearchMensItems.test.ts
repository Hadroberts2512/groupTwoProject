import {HannahPage} from './hannahPageObjects'
const hannah = new HannahPage()

test('Show mens clothing when searching Mens', async () => {
    await hannah.navigate()
    await hannah.setInput(hannah.userName, 'testingdev75@gmail.com')
    await hannah.setInput(hannah.passWord, 'HannahJJKoffi75')
    await hannah.click(hannah.signInSubmit)
    await hannah.click(hannah.searchInput)
    await hannah.setInput(hannah.searchInput, 'Mens\n')

    await hannah.driver.findElement(hannah.mensShirtColor)})