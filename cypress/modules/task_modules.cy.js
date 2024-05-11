class TaskModule {

  constructor() {

    Cypress.Commands.add('acessarHome', () => {
      cy.visit('/')
      cy.title()
        .should('eq', 'Gerencie suas tarefas com Mark L')
    })

    Cypress.Commands.add('createTask', (taskName = '') => {
      if (taskName !== '') {
        cy.get('#newTask')
        .type(taskName + '{enter}')
      } else {
        cy.get('button[type="submit"]').click()
      }
    })

    Cypress.Commands.add('isRequired', (element, txt) => {
      cy.get(element)
        .invoke('prop', 'validationMessage')
        .should((text) => {
          expect(
            txt
          ).to.eq(text)
        })
    })


  }
}

const taskModule = new TaskModule(); // Instanciação da classe

export default taskModule; // Exporta a instância