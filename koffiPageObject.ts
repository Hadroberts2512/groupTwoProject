import{BasePage} from './basePage'
import{By} from 'selenium-webdriver'

export class koffiPage extends BasePage{
    
    searchInput: By = By.id('search')
    Tees: By = By.className('products list items product-items')
    //radiantTee: By = By.className('product-item-info')
    radiantTee: By = By.className('product-item-info')
    reviewTitle: By = By.id('tab-label-reviews-title')
    ratingError: By = By.id('ratings[4]-error')
    //ratingError: By = By.className('mage-error')
    
    nicknameInput: By = By.id('nickname_field')
    summaryInput: By = By.id('summary_field')
    reviewInput: By = By.id('review_field')
    submitBtn: By = By.className('action submit primary')



    constructor() {
        super({url: 'https://magento.softwaretestingboard.com/'})
    }

}