/* global cy */

describe('My First Test', () => {
    
    it('Testing acces login to get dashboard acces', () => {
      cy.visit('http://localhost:3000');

    //   cy.contains('type');
    //   cy.contains('type').click();

      cy.url().should('include', '/login');

      cy.get("[type='email']")
      .type('fernando.lopez.dev@hotmail.com')
      .should('have.value', 'fernando.lopez.dev@hotmail.com')
      
      cy.get("[type='password']")
      .type('123456')
      .should('have.value', '123456')

      cy.get("[type='submit']").click();

      cy.url().should('eq', 'http://localhost:3000/')
    })

  })