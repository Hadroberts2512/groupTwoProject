import {HannahPage} from './hannahPageObjects'
const hannah = new HannahPage()

test('Notify user item does not exist on site', async () => {
    await hannah.navigate()
    await hannah.setInput(hannah.userName, 'testingdev75@gmail.com')
    await hannah.setInput(hannah.passWord, 'HannahJJKoffi75')
    await hannah.click(hannah.signInSubmit)
    await hannah.click(hannah.searchInput)
    await hannah.setInput(hannah.searchInput, 'Canoes\n')

    expect(
        await (await hannah.driver.findElement(hannah.searchResultMessage)).getAttribute("Your search returned no results.")

)})


