/// <reference types="cypress" />

import { faker } from '@faker-js/faker';
import apiHelper from '../helper/api.cy';
var randomName = faker.person.fullName()

describe('tasks', () => {

  let testData

  before(() => {
      cy.fixture('tasks').then(t => {
        testData = t
      })

  })

  beforeEach(() => {
    apiHelper.removerTodasTarefas()
    cy.acessarHome()
    // cy.viewport(1920, 1080)
  })

      context('cadastro', () => {

        beforeEach(() => {
          // cy.acessarHome()
        })

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
        
          it('não deve cadastrar uma nova tarefa com campo em branco', () => {
            cy.createTask()
            cy.isRequired('#newTask', 'This is a required field')
          })

      })

      context('atualizacao', () => {
      
        beforeEach(() => {
          // cy.acessarHome()
        })

          it('deve concluir uma tarefa', () => {
            const taskName = testData.massa1
            cy.createTask(taskName.taskNameDescription)

            cy.contains('p', taskName.taskNameDescription)
              .parent()
              .find('*[class*=ItemToggle]')
              .click()

            cy.contains('p', taskName.taskNameDescription)
              .parent()
              .find('button[class*=ItemToggleSelected]')

            cy.contains('p', taskName.taskNameDescription)
              .should('have.css', 'text-decoration-line', 'line-through')
          })
      })

      context('remocao', () => {
      
        beforeEach(() => {
          // cy.acessarHome()
        })

          it('deve excluir uma tarefa', () => {
            const taskName = testData.massa1
            cy.createTask(taskName.taskNameDescription)

            cy.contains('p', taskName.taskNameDescription)
              .parent()
              .find('*[class*=ItemDeleteButton]')
              .click()

            cy.contains('p', taskName.taskNameDescription)
              .should('not.exist')
          })
  })
})


  // Ex de criar massa de dados com const
  // const taskName = {
  //   name: 'blablabla'
  //   id_done: false
  // }

  // para chamar basta usar taskName.name ou taskName.id_done