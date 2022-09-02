import { koffiPage } from "./koffiPageObject";
const koffi = new koffiPage

test('adding item to wishlist before signing in',async() => {
   await koffi.navigate()
   await koffi.click(koffi.whatsnew)
   await koffi.click(koffi.shirt)
   await koffi.click(koffi.whislist)
   await koffi.setInput(koffi.Email,'testingdev75@gmail.com')
   await koffi.setInput(koffi.password,'HannahJJKoffi75')
   await koffi.click(koffi.signin)

        await koffi.driver.sleep(5000) 
        await koffi.driver.quit()


})