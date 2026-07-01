//Include playwright module
const{test,expect}= require('@playwright/test');
const { HomePage } = require('../pages/homePage');
const { SignUpPage } = require('../pages/signupPage');


//Write a test
test('Page Object Model for assessment Incubyte',async({page})=>{


 const homepage = new HomePage(page);

 //Navigate to the home page URL
 await homepage.goto();

 //Click on the Register link
//  await homepage.clickRegisterLink();

// const signuppage = new SignUpPage(page);


// await signuppage.clickFirstNameInput(); //Click on the First Name input field and fill it with the value from the environment variable

// await signuppage.clickLastNameInput(); //Click on the Last Name input field and fill it with the value from the environment variable

// await signuppage.clickAddressInput(); //Click on the Address input field and fill it with the value from the environment variable

// await signuppage.clickCityInput(); //Click on the City input field and fill it with the value from the environment variable

// await signuppage.clickStateInput(); //Click on the State input field and fill it with the value from the environment variable

// await signuppage.clickZipCodeInput(); //Click on the Zip Code input field and fill it with the value from the environment variable      

// await signuppage.clickPhoneInput(); //Click on the Phone input field and fill it with the value from the environment variable

// await signuppage.clickSsnInput(); //Click on the SSN input field and fill it with the value from the environment variable

// await signuppage.clickUsernameInput(); //Click on the Username input field and fill it with the value from the environment variable

// await signuppage.clickPasswordInput(); //Click on the Password input field and fill it with the value from the environment variable

// await signuppage.clickConfirmPasswordInput(); //Click on the Confirm Password input field and fill it with the value from the environment variable

// await signuppage.clickRegisterButton(); //Click on the Register button

// await signuppage.clickLogoutLink(); //Click on the Log Out link











await page.waitForTimeout(5000);






})