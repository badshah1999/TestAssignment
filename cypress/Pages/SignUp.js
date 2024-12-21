class SignUp{
    elements={
        loginAccount:() => cy.xpath("(//a[normalize-space()='Sign In'])[position()=1]"),
        createAccount:() => cy.xpath("(//a[text()='Create an Account'])[position()=1]"),
        inputFirstName:() =>cy.xpath("//input[@id='firstname']"),
        inputLastName:() => cy.xpath("//input[@id='lastname']"),
        inputEmail:() =>cy.xpath("//input[@title='Email']"),
        inputPassword:() =>cy.xpath("//input[@title='Password']"),
        inputConfirmPassword:() => cy.xpath("//input[@id='password-confirmation']"),
        submitBtn: () => cy.xpath("(//button[@type='submit'])[position()=2]"),
        confirmMessage: () => cy.xpath("//div[@data-ui-id='message-success']/div"),
        loginMessage: () => cy.xpath("//span[@class='base']")
    }
    navigateSignIn(){
        return this.elements.loginAccount()
    }
    navigateCreateAccount(){
        return this.elements.createAccount()
    }
    enterFirstName(){
        return this.elements.inputFirstName()
    }
    enterLastName(){
        return this.elements.inputLastName()
    }
    enterEmail(){
        return this.elements.inputEmail()
    }
    enterPassword(){
        return this.elements.inputPassword()
    }
    enterConfirmPassword(){
        return this.elements.inputConfirmPassword()
    }
    submit(){
        return this.elements.submitBtn()
    }
    verifyMessage(type){
        switch(type){
        case 'LOGIN':
            return this.elements.loginMessage()
        case 'SIGNUP':
            return this.elements.confirmMessage()
        }
    }
}
export default new SignUp()