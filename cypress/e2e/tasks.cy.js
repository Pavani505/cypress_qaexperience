/// <reference types="cypress" />

import { faker } from '@faker-js/faker';
import apiHelper from '../helper/api.cy';
var randomName = faker.person.fullName()
// const urlApiBase = 'http://localhost:3333'

describe('tasks', () => {

  // Ex de criar massa de dados com const
  // const taskName = {
  //   name: 'blablabla'
  //   id_done: false
  // }

  // para chamar basta usar taskName.name ou taskName.id_done

  it('deve cadastrar uma nova tarefa', () => {
    apiHelper.removerTarefaNome('Ler um livro')
    cy.createTask('Ler um livro')
    cy.contains('main div p', 'Ler um livro')
      .should('be.visible')
    // cy.wait (9999)
  })

  it('não deve cadastrar uma nova tarefa ja existente', () => {
    apiHelper.removerTarefaNome('Ler um livro')
    apiHelper.criarTarefa('Ler um livro')
    cy.createTask('Ler um livro')
    cy.get('#swal2-html-container')
      .should('be.visible')
      .should('have.text', 'Task already exists!')
  })

})

Cypress.Commands.add('createTask', (taskName) => {
  cy.visit('/')
  cy.title()
    .should('eq', 'Gerencie suas tarefas com Mark L')
  cy.get('#newTask')
    .type(taskName + '{enter}')
})