import {Luma} from './jjAddPageObjects'
const luma = new Luma()  

    test('Bags results/Success Message', async () => {
        await luma.navigate()
        await luma.getElement(luma.gearTab) 
        await luma.click(luma.gearTab)
        await luma.getElement(luma.bags)
        await luma.click(luma.bags)
        let resultsText = await luma.getText(luma.bagContainer)
            expect(resultsText).toContain("Backpack") 
      //  await luma.getElement(luma.drivenBagTitle)
      //  await luma.getElement(luma.drivenBagAddToCart)
      //  await luma.click(luma.drivenBagAddToCart)
      //  await luma.getElement(luma.successMsg)
      //      expect(luma.successMsg).toContain('You added Driven Backpack to your shopping cart.')       
        await luma.driver.sleep(5000) 
        await luma.driver.quit()
    })   