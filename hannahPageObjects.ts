

import {BasePage} from './basePage'
import {By} from 'selenium-webdriver'

export class HannahPage extends BasePage {
    signInSubmit: By = By.id(('send2'))
    userName: By = By.name('login[username]')
    passWord: By = By.name('login[password]')
    searchInput: By = By.id('search')
    sorter: By = By.id('sorter')
    item: By = By.className('product-item-link')
    addtoCart: By = By.id('product-addtocart-button')
    cartIcon: By = By.className('action showcart active')
    shortsSize: By = By.id('option-label-size-143-item-171')
    shortsColorOrange: By = By.id('option-label-color-93-item-56')
    numberInCart: By = By.xpath('//span[@class="counter-number"]')
    proceedToCheckout: By = By.id('top-cart-btn-checkout')
    wholePage: By = By.className('page-wrapper')
    searchResultMessage: By = By.className('message notice')
    mensShirtColor: By = By.id('option-label-color-93-item-49')



    constructor() {
        ;super({url: 'https://magento.softwaretestingboard.com/customer/account/login/referer/aHR0cHM6Ly9tYWdlbnRvLnNvZnR3YXJldGVzdGluZ2JvYXJkLmNvbS8%2C/'})
    }
}