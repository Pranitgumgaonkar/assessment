//Include playwright module
const{test,expect}= require('@playwright/test');
const { HomePage } = require('../pages/homePage');


//Write a test
test('Page Object Model for assessment Incubyte',async({page})=>{


 const homepage = new HomePage(page);
 
 //Navigate to the home page URL
 await homepage.goto();

 //Click on the Register link
 await homepage.clickRegisterLink();








})