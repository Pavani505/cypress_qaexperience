/// <reference types="cypress" />
import { faker } from '@faker-js/faker';

var randomName = faker.person.fullName()
const urlApiBase = 'http://localhost:3333'

describe('tasks', () => {

  // function listarTarefas() {
  //   var todasAsTarefas = []
  //   cy.request({
  //     url: urlApiBase + '/tasks',
  //     method: 'GET'
  //   }).then(response => {
  //     expect(response.status).to.eq(200)
  //     var tamanho = response.body.length
  //     for (var i = 0; i < tamanho; i++) {
  //       var tarefas = response.body[i]
  //       todasAsTarefas.push(tarefas)
  //     }
  //     return todasAsTarefas[0]['id']
  //   })
  // }

  function removerTarefas(id) {
    cy.request({
      url: urlApiBase + '/tasks/' + id,
      method: 'DELETE'
    }).then(response => {
      expect(response.status).to.eq(204)
    })
  }

  function removerTodasTarefas() {
    cy.request({
      url: urlApiBase + '/tasks',
      method: 'GET'
    }).then(response => {
      expect(response.status).to.eq(200)
      var tamanho = response.body.length
      for (var i = 0; i < tamanho; i++) {
        var tarefas = response.body[i]
        var tarefasId = tarefas.id
        removerTarefas(tarefasId)
      }  
    })
  }

  function removerTarefaNome(nome) {
    cy.request({
      url: urlApiBase + '/tasks',
      method: 'GET'
    }).then(response => {
      expect(response.status).to.eq(200)
      var tamanho = response.body.length
      for (var i = 0; i < tamanho; i++) {
        var tarefas = response.body[i]
          if (tarefas.name === nome) {
            var tarefasId = tarefas.id
            removerTarefas(tarefasId)
          }
      }  
    })
  }

  it('deve cadastrar uma nova tarefa', () => {
    // removerTodasTarefas()
    removerTarefaNome('Ler um livro')
    cy.visit('/')
    cy.title()
      .should('eq', 'Gerencie suas tarefas com Mark L')
    cy.get('#newTask')
      .type('Ler um livro{enter}')
    // cy.get('main div p')
    //   .should('be.visible')
    //   .should('contain.text', 'Ler um livro')
    cy.contains('main div p', 'Ler um livro')
      .should('be.visible')
    // cy.wait (9999)
  })

})