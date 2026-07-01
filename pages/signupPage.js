//include Playwright module
const {expect}= require('@playwright/test');

//create class
exports.SignUpPage = class SignUpPage{

    /**
     * 
     * @param {import ('@playwright/test').page } page 
     */
    constructor(page){
        //Initialize page object
        this.page=page;


        //this.registerLink=page.locator('text=Register');
        this.firstNameInput=page.getByTestId('customer.firstName');







       
    }
    

async clickFirstNameInput(){
    await this.firstNameInput.click();
}
}