
class ApiHelper {
  constructor() {
    this.urlApiBase = 'http://localhost:3333';
  }

  listarTarefas() {
    var todasAsTarefas = []
    cy.request({
      url: this.urlApiBase + '/tasks',
      method: 'GET'
    }).then(response => {
      expect(response.status).to.eq(200)
      var tamanho = response.body.length
      for (var i = 0; i < tamanho; i++) {
        var tarefas = response.body[i]
        todasAsTarefas.push(tarefas)
      }
    })
  }

  removerTarefas(id) {
    cy.request({
      url: this.urlApiBase + '/tasks/' + id,
      method: 'DELETE'
    }).then(response => {
      expect(response.status).to.eq(204)
    })
  }

  removerTodasTarefas() {
    cy.request({
      url: this.urlApiBase + '/tasks',
      method: 'GET'
    }).then(response => {
      expect(response.status).to.eq(200)
      var tamanho = response.body.length
      for (var i = 0; i < tamanho; i++) {
        var tarefas = response.body[i]
        var tarefasId = tarefas.id
        this.removerTarefas(tarefasId)
      }  
    })
  }

  removerTarefaNome(nome) {
    cy.request({
      url: this.urlApiBase + '/tasks',
      method: 'GET'
    }).then(response => {
      expect(response.status).to.eq(200)
      var tamanho = response.body.length
      for (var i = 0; i < tamanho; i++) {
        var tarefas = response.body[i]
          if (tarefas.name === nome) {
            var tarefasId = tarefas.id
            this.removerTarefas(tarefasId)
          }
      }  
    })
  }

  criarTarefa(nome) {
    cy.request({
      url: this.urlApiBase + '/tasks',
      method: 'POST',
      body: {name: nome,
            is_done: false
      }
    }).then(response => {
      expect(response.status).to.eq(201)
    })
  }

}

export default ApiHelper
