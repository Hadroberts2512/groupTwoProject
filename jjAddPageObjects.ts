import {BasePage} from './basePage'
    import {By} from 'selenium-webdriver' 
    
    
    export class Luma extends BasePage {
        gearTab: By = By.css(('[id="ui-id-6"]')) 
        bags: By = By.xpath(('(//a[text()="Bags"])[1]')) 
        bagContainer: By = By.css(('[class="column main"]'))
        drivenBagTitle: By = By.xpath(('//a[text()="Driven Backpack"]')[2])
        drivenBagAddToCart: By = By.css(('[class="action tocart primary"]')[2])
        successMsg: By = By.css(('[class="message-success success message"]')) 
        cartCountIcon: By = By.css(('[class="counter-number"]'))
        cartIcon: By = By.css(('[class="action showcart"]')[0])
        miniCart: By = By.css(('[class="block block-minicart ui-dialog-content ui-widget-content"]'))
        miniCartCount: By = By.css(('[class="items-total"]'))
        miniCartItem: By = By.css(('[class="product-item-details"]')[0])
        proceedToCheckout: By = By.css(('[id="top-cart-btn-checkout"]'))
        checkoutItem: By = By.css(('[class="product-item-name"]'))
        emailInput: By = By.css(('[class="input-text valid"]'))
        firstNameInput: By = By.css(('[class="input-text"]')[3])
        lastNameInput: By = By.css(('[class="input-text"]')[4])
        companyInput: By = By.css(('[class="input-text"]')[5])
        streetInput: By = By.css(('[class="input-text"]')[6])
        cityInput: By = By.css('[class="input-text"]')[9]
        zipInput: By = By.css(('[class="input-text"]')[11])
        countrySelection: By = By.css(('[name="country_id"]')[0]) 
        newZealand: By = By.css(('[data-title="New Zealand"]'))
        phoneInput: By = By.css(('[class="input-text"]')[12])
        nextBtn: By = By.css(('[data-role="opc-continue"]')) 
    
        constructor() {
            super({url: 'https://magento.softwaretestingboard.com/'}) 
            
        }
        
    }