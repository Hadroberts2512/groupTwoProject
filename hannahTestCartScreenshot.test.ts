import {HannahPage} from './hannahPageObjects'
const hannah = new HannahPage()
const fs = require('fs')

test('add to cart success screenshot', async () => {
    await hannah.navigate()
    await hannah.setInput(hannah.userName, 'testingdev75@gmail.com')
    await hannah.setInput(hannah.passWord, 'HannahJJKoffi75')
    await hannah.click(hannah.signInSubmit)
    await hannah.click(hannah.searchInput)
    await hannah.setInput(hannah.searchInput, 'Women\n')
    await hannah.click(hannah.sorter)
    await hannah.click(hannah.sorter)
    await hannah.click(hannah.item)
    await hannah.click(hannah.shortsSize)
    await hannah.click(hannah.shortsColorOrange)
    await hannah.click(hannah.addtoCart)
    
    await fs.writeFile(`${__dirname}/addtocartsuccess.png`,
     await hannah.driver.takeScreenshot(), "base64",
     (e) => {
         if (e) console.error(e)
         else console.log('Save Succesful')})
        
    await hannah.driver.sleep(4000)
    await hannah.driver.quit
    
})



