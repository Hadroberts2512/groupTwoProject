import{BasePage} from './basePage'
import{By} from 'selenium-webdriver'

export class koffiPage extends BasePage{
    /*searchBtn: By = By.id('search')
    nickname: By = By.id('nickname_field')
    ratingStar: By = By.id('Rating_4_label')
    ratingLabel: By = By.id('id="Rating_rating_label"')
    summary: By = By.id('summary_field')
    review: By = By.id('review_field')
    submitbtn: By = By.className('action submit primary')
   submitBtn: By = By.xpath('//button[@class="action submit primary"]')
    reviewbtn: By = By.id('tab-label-reviews-title')
    radiantTee: By = By.className('page-product-configurable catalog-product-view product-radiant-tee page-layout-1column')
    hotSellers: By = By.className('search results')*/
    
    searchInput: By = By.id('search')
    Tees: By = By.className('products list items product-items')
    //radiantTee: By = By.className('product-item-info')
    radiantTee: By = By.className('product-item-info')
    reviewTitle: By = By.id('tab-label-reviews-title')
    rating: By = By.className('rating-4')
    
    nicknameInput: By = By.id('nickname_field')
    summaryInput: By = By.id('summary_field')
    reviewInput: By = By.id('review_field')
    submitBtn: By = By.className('action submit primary')



    constructor() {
        super({url: 'https://magento.softwaretestingboard.com/'})
    }

}