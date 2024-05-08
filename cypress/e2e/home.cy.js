/// <reference types="cypress" />

describe('home', () => {
  it('webapp deve estar online', () => {
    // cy.visit('http://localhost:3000')
    cy.visit('/')
    cy.title().should('eq', 'Gerencie suas tarefas com Mark L')
    // cy.title().should('contain', 'Gerencie suas tarefas com Mark')
  })
})