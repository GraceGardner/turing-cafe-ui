describe('user flow', () => {

  it('should be able to make a new reservation and view current reservations', () => {

    cy.visit('http://localhost:3000')
      .get('.app-title')
      .should('have.text', 'Turing Cafe Reservations')

      .get('form')
      .get('.name-input')
      .type('Gracie')

      .get('.date-input')
      .type('2022-02-20')

      .get('.time-input')
      .type('12:00:00.384')

      .get('.number-input')
      .type('2')

      .get('.reservation-button')
      .click()

      .get('.reservation').last()
      .should('include.text', 'Gracie')

      .get('.cancel-button').last().click()
      .get('.cancel-button').last().click()
      .get('.cancel-button').last().click()
      .get('.cancel-button').last().click()
      .get('.cancel-button').last().click()
      .get('.cancel-button').last().click()
      .get('.cancel-button').last().click()
      .get('.cancel-button').last().click()
      .get('.cancel-button').last().click()
      .get('.cancel-button').last().click()
      .get('.cancel-button').last().click()
      .get('.cancel-button').last().click()
      .get('.cancel-button').last().click()
      .get('.cancel-button').last().click()
      .get('.cancel-button').last().click()
      .get('.cancel-button').last().click()

      .get('.reservation').last()
      .should('not.include.text', 'Gracie')

  })
})
