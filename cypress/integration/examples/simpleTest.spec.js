/// <reference types="cypress" />

Cypress.on('uncaught:exception', (err, runnable) => {
    return false;
});

describe("Simple Test", ()  => {
    it("Login application", () => {
        cy.visit("https://mysterious-forest-66057.herokuapp.com/password/english");
        cy.percySnapshot();
        
        cy.get('#password').should(($pwd) => {
            const password = $pwd.text()
            expect(password.length).to.be.greaterThan(0);
           
          })
    })

})
