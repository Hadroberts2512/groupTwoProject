
import { koffiPage } from "./koffiPageObject";
const koffi = new koffiPage

test('searching item and adding review', async() => {
    /*await koffi.navigate('https://magento.softwaretestingboard.com/radiant-tee.html')
    await koffi.radiantTee
    await koffi.click(koffi.reviewbtn)
    await koffi.click(koffi.ratingStar)
    await koffi.setInput(koffi.nickname,"koffi")
    await koffi.navigate()
    await koffi.setInput(koffi.searchBtn,'Radiant Tee\n')
    await koffi.hotSellers
    await koffi.click(koffi.radiantTee)*/
    
    await koffi.navigate()
    await koffi.setInput(koffi.searchInput,'Radiant Tee\n')
    await koffi.click(koffi.radiantTee)
    await koffi.click(koffi.radiantTee)
    await koffi.click(koffi.reviewTitle)
    //trying to give 4 stars but this code is not working
    await koffi.click(koffi.rating)
    await koffi.setInput(koffi.nicknameInput,'koffi')
    await koffi.setInput(koffi.summaryInput,'Color of outfit')
    await koffi.setInput(koffi.reviewInput,'I really loved the way this was made. That is the texture and material. Different colors makes it look really cool.')
    await koffi.click(koffi.submitBtn)
    
   

    
    

    
    
})

