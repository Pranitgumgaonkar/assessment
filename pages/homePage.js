//include Playwright module
const {expect}= require('@playwright/test');

//create class
exports.HomePage = class HomePage{

    /**
     * 
     * @param {import ('@playwright/test').page } page 
     */
    constructor(page){
        //Initialize page object
        this.page=page;

       
    }
}