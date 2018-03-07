// https://docs.cypress.io/api/introduction/api.html

describe('which-key', () => {
  it('Shows instructional message when there has been no input', () => {
    cy.visit('/')
    cy.contains('h1', 'Start smashing those keys!')
  })
  it('Shows the correct key info when a key is pressed', () => {
    cy.visit('/')
    cy.get('body').type('f')
    cy.contains('.key .key__value', 'f')
    cy.contains('.key .key__code', '102')
  })
  it('Clear button clears logged key', () => {
    cy.visit('/')
    cy.get('body').type('f')
    cy.contains('.key .key__value', 'f')
    cy.get('button').click()
    cy.contains('h1', 'Start smashing those keys!')
  })
})
