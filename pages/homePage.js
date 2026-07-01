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


        //this.registerLink=page.locator('text=Register');
        this.registerLink=page.getByText('Register');







       
    }
    async goto(){
        await this.page.goto('https://parabank.parasoft.com/parabank/index.htm?ConnType=JDBC')
}

async clickRegisterLink(){
    await this.registerLink.click();
}
}