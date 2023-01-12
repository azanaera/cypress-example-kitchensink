/// <reference types="cypress" />

const navBar = Cypress.env('navbarText')

context('My First Test', () => {
//   beforeEach(() => {
//     cy.visit('/commands/actions')
//   })

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

//   it('correctly renders the cypress website link', ()  => {
//     cy.findByText(navBar).should('exist')
//     cy.findByText('cypress.io').should('exist')
//   })

    it('types into an email field', () => {
        cy.visit('/commands/actions') // run by queue
        cy.findByPlaceholderText('Email').type('test@gmail.com')
        cy.wait(2000).then(() => {
          console.log('test is finished');
          fetch('https://jsonplaceholder.typicode.com/users')
          .then((res) => res.json())
          .then((data) => {
              console.log(data) 
          })
        })
    })
}) 