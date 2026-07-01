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


        
        this.firstNameInput=page.locator('input[name="customer.firstName"]'); //locator for the First Name input field

        this.lastNameInput=page.locator('input[name="customer.lastName"]'); //locator for the Last Name input field

        this.addressInput=page.locator('input[name="customer.address.street"]'); //locator for the Address input field

        this.cityInput=page.locator('input[name="customer.address.city"]'); //locator for the City input field          
        
        this.stateInput=page.locator('input[name="customer.address.state"]'); //locator for the State input field

        this.zipCodeInput=page.locator('input[name="customer.address.zipCode"]'); //locator for the Zip Code input field    










       
    }
    

async clickFirstNameInput(){
    await this.firstNameInput.click();
    await this.firstNameInput.fill(process.env.FirstName);
}

async clickLastNameInput(){
    await this.lastNameInput.click();
    await this.lastNameInput.fill(process.env.LastName);
}

async clickAddressInput(){
    await this.addressInput.click();
    await this.addressInput.fill(process.env.Address);
}

async clickCityInput(){
    await this.cityInput.click();
    await this.cityInput.fill(process.env.City);
}

async clickStateInput(){
    await this.stateInput.click();
    await this.stateInput.fill(process.env.State);
}

async clickZipCodeInput(){
    await this.zipCodeInput.click();
    await this.zipCodeInput.fill(process.env.ZipCode);
}





}