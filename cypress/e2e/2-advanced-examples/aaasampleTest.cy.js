const cypressConfig = require("../../../cypress.config")

const navBar = Cypress.env('navbarText')

context('My First Test', () => {
  beforeEach(() => {
    cy.visit('/commands/actions')
  })

  //   it('has an h1 on the page', () => {
  //     cy.get('h1').should('exist');
  //   })

  //   it('renders the correct h1 text', () => {
  //     cy.get('h1').should('contain.text', 'Actions')
  //   })

  //   it('renders a paragraph under the h1', () => {
  //     cy.get('.container').find('p').should('exist')
  //   });

  //   it('renders a section with the correct elements', () => {
  //     cy.get('.container').eq(2).within(() => {
  //       cy.get('h4').should('exist');
  //       cy.get('p').should('exist');
  //     });
  //   });

  it('correctly renders the cypress website link', ()  => {
    cy.findByText(navBar).should('exist')
    cy.findByText('cypress.io').should('exist')
  })
}) 