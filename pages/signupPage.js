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

        this.phoneInput=page.locator('input[name="customer.phoneNumber"]'); //locator for the Phone input field

        this.ssnInput=page.locator('input[name="customer.ssn"]'); //locator for the SSN input field

        this.usernameInput=page.locator('input[name="customer.username"]'); //locator for the Username input field

        this.passwordInput=page.locator('input[name="customer.password"]'); //locator for the Password input field

        this.confirmPasswordInput=page.locator('input[name="repeatedPassword"]'); //locator for the Confirm Password input field

        this.registerButton=page.locator('input[value="Register"]'); //locator for the Register button

        this.logoutLink=page.locator('text=Log Out'); //locator for the Log Out link



       
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

async clickPhoneInput(){
    await this.phoneInput.click();
    await this.phoneInput.fill(process.env.Phone);
}

async clickSsnInput(){
    await this.ssnInput.click();
    await this.ssnInput.fill(process.env.SSN);  
}

async clickUsernameInput(){
    await this.usernameInput.click();
    await this.usernameInput.fill(process.env.Username1);
}

async clickPasswordInput(){
    await this.passwordInput.click();
    await this.passwordInput.fill(process.env.Password);
}

async clickConfirmPasswordInput(){
    await this.confirmPasswordInput.click();
    await this.confirmPasswordInput.fill(process.env.ConfirmPassword);  
}

async clickRegisterButton(){
    await this.registerButton.click();
}

async clickLogoutLink(){
    await this.logoutLink.click();
}





}