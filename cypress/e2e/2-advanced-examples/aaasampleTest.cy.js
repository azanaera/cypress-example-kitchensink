/// <reference types="cypress" />

const navBar = Cypress.env('navbarText')

context('My First Test', () => {

  beforeEach(() => {
    cy.visit('commands/actions')
  })

  it('trigers a popover on click', () => {
    cy.get('.action-btn').click()
    cy.findByText('This popover shows up on click').should('be.visible')
  })

  it('can click on different sections of a canvas', () => {
    cy.get('#action-canvas').click('top')
    cy.get('#action-canvas').click('bottomRight')
    cy.get('#action-canvas').click(80,100)
  })


  it('can double click to edit', () => {
    cy.get('.action-div').dblclick().should('not.be.visible')
    cy.get('.action-input-hidden').should('be.visible')
  })

  it('can right click to edit', () => {
    cy.get('.rightclick-action-div').rightclick().should('not.be.visible')
    cy.get('.rightclick-action-input-hidden').should('be.visible')
  })

  it('shows the nav link on hover', () => {
    cy.get('.dropdown-toggle').trigger('click') // mouseover not working
    cy.get('.dropdown-menu').should('be.visible')
  })



  // it('sets a token in local storage', () => {
  //   cy.setLocalStorage('token', 'abcd123')
  // })


  // it('gets a token from local storage', () => {
  //   cy.getLocalStorage('token').should('eq','abcd123')
  // })


  // it('uses fixture data in a network request', function() {
  //   cy.visit('/commands/network-requests')
  //   cy.intercept('GET', '**/comments/*').as('getComment')
  //   cy.get('.network-btn').click()
  //   cy.wait('@getComment').then((res) => {
  //     cy.log('Response: ',res)
  //   })
  // })


  // it('pulls data from a fixture', () => {
  //   cy.fixture('example').then((data) => {
  //     cy.log('Data : ', data)
  //   })
  // })


  // it('updated fixture data inline', () => {
  //   cy.fixture('example').then((data) => {
  //     data.email = 'update@mail.com'
  //     cy.log('updated : ', data)
  //   })
  // })

  before(() => {
    cy.request('https://jsonplaceholder.typicode.com/users').its('body').should('have.length',10)
  })

  afterEach(() => {
    cy.log('after each hook/test is here')
  })

  after(() => {
    cy.log('the final after hook runs once')
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

  //   it('correctly renders the cypress website link', ()  => {
  //     cy.findByText(navBar).should('exist')
  //     cy.findByText('cypress.io').should('exist')
  //   })

  // it('types into an email field', () => {
  //   cy.visit('/commands/actions') // run by queue
  //   cy.findByPlaceholderText('Email').type('test@gmail.com')
  //   cy.wait(2000).then(() => {
  //     console.log('test is finished');
  //     fetch('https://jsonplaceholder.typicode.com/users')
  //         .then((res) => res.json())
  //         .then((data) => {
  //           console.log(data) 
  //         })
  //   })
  // })

  // it('shows an active class for the current page ', () => {
  //   cy.visit('/commands/actions')
  //   cy.get('.dropdown-menu').find('li').eq(2).should('have.class','active')
  // })


  // it('should not have an active class on inactive pages', () => {
  //   cy.visit('/commands/actions')
  //   cy.get('.dropdown-menu')
  //   .find('li').first()
  //   .should('not.have.class','active')
  //   .find('a').should('have.attr','href ','/commands/querying')
  // })

  // it('links to the actions page correctly', () => {
  //   cy.visit('/')
  //   cy.findAllByText('Actions').last().click() // 
  //   cy.findAllByText('Actions').first().click({force:true}) // is not visible, so force click
  //   cy.url().should('include','commands/actions') // verify the route 
  // })

  // it('lets you type in an input field', () => {
  //   cy.visit('/commands/actions')
  //   cy.findByPlaceholderText('Email').type('Test').should('have.value','Test')
  // })

  // it('lets you clear an input field', () => {
  //   cy.visit('/commands/actions')
  //   cy.findByLabelText('Describe:').type('Test Desc').should('have.value','Test Desc')
  //   .clear().should('have.value','')
  // })

  // it('lets you check a checkbox', () => {
  //   cy.visit('/commands/actions')
  //   cy.get('.action-checkboxes [type="checkbox"]')
  //     .first().check().should('be.checked')
  //     // .eq(1).check({force:true}).should('be.checked')
  // })
}) 