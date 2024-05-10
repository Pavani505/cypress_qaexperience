class TaskModule {

  constructor() {
    Cypress.Commands.add('createTask', (taskName) => {
      cy.visit('/')
      cy.title()
        .should('eq', 'Gerencie suas tarefas com Mark L')
      cy.get('#newTask')
        .type(taskName + '{enter}')
    })
  }

}

const taskModule = new TaskModule(); // Instanciação da classe

export default taskModule; // Exporta a instância