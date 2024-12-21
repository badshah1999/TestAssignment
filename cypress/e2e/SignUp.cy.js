import SignUp from "../Pages/SignUp"
describe('SignUp',()=>{
    let testData;
    before(()=>{
        cy.fixture('signUp').then((data)=>{
            testData=data
        })
    })
    beforeEach(()=>{
        cy.visit('/')

    })
    it('Verify can able to Create a User Account',()=>{
        SignUp.navigateCreateAccount().click()
        SignUp.enterFirstName().type(testData.firstName)
        SignUp.enterLastName().type(testData.lastName)
        SignUp.enterEmail().type(testData.email)
        SignUp.enterPassword().type(testData.password)
        SignUp.enterConfirmPassword().type(testData.password)
        SignUp.submit().click()
        SignUp.verifyMessage(testData.signUpCase).should('have.text',testData.confirmMessage)
    })
    it('Verify can able to Sign In',()=>{
        SignUp.navigateSignIn().click()
        SignUp.enterEmail().type(testData.email)
        SignUp.enterPassword().type(testData.password)
        SignUp.submit().click()
        SignUp.verifyMessage(testData.loginCase).should('have.text',testData.loginVerify)
    })
})