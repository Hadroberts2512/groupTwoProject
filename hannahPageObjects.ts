

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

    constructor() {
        super({url: 'https://magento.softwaretestingboard.com/customer/account/login/referer/aHR0cHM6Ly9tYWdlbnRvLnNvZnR3YXJldGVzdGluZ2JvYXJkLmNvbS8%2C/'})
    }
}