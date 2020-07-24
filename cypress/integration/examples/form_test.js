/// <reference types = "cypress" />

describe('Form Validation Name Field Working as Expected', () => {
    it('loads properly', () => {
      cy.visit('http://localhost:3000/')
      .url().should('include', 'http://localhost:3000/')
    })
  
    it('enters the Order form', () => {
      cy.get('[name=orderForm]')
        .click()
    })
  
    it('User can enter name', () => {
      cy.get('input[name=name]')
        .type('V')
        .should('have.value', 'V')
    })
  
    it('Select Pizza Size', () => {
      cy.get('[name=size]')
        .select('xs')
    })
  
    it('submit button is disabled', () => {
        cy.get('[type=submit]')
        .should('be.disabled')
      })
  })
  describe('Form Validation Required Fields Working as Expected', () => {
    it('loads properly', () => {
      cy.visit('http://localhost:3000/')
      .url().should('include', 'http://localhost:3000/')
    })
  
    it('enters the Order form', () => {
      cy.get('[name=orderForm]')
        .click()
    })
  
    it('User can enter name', () => {
      cy.get('input[name=name]')
        .type('Victoria')
        .should('have.value', 'Victoria')
    })
    it('submit button is disabled', () => {
        cy.get('[type=submit]')
        .should('be.disabled')
      })
  })
  describe('User Flow > Landing to Order Completion', () => {
    it('loads properly', () => {
      cy.visit('http://localhost:3000/')
      .url().should('include', 'http://localhost:3000/')
    })
  
    it('enters the Order form', () => {
      cy.get('[name=orderForm]')
        .click()
    })
  
    it('User can enter name', () => {
      cy.get('input[name=name]')
        .type('Victoria Vegan')
        .should('have.value', 'Victoria Vegan')
    })
  
    it('Select Pizza Size', () => {
      cy.get('[name=size]')
        .select('xs')
    })
  
    it('Add 2 toppings', () => {
      cy.get('[name=pepperoni]')
        .click()
  
      cy.get('[name=jalapeno]')
        .click()
    })

    it('adds special instructions', () => {
        cy.get('textarea[name=specialInstructions]')
          .type('Gluten Free Please!')
          .should('have.value', 'Gluten Free Please!')
      })
  
    it('and submits the form', () => {
      cy.get('[type=submit]')
        .click()
    })
  
    it('order page to review order', () => {
      cy.get('[name=ordersButton]')
        .click()
    })
  
  })