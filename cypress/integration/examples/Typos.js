
describe('Typos Suite', () => 
{
    //Verify Page title is correct
    it('verify Page Title', () => 
    {
    cy.visit('https://the-internet.herokuapp.com/')
    cy.title().should('eq','The Internet')
    })
    
    //Clicks link to Typos Page
    it('Clicks Typos Link', () => 
    {
  
    cy.visit('https://the-internet.herokuapp.com/')
    cy.contains('Elemental Selenium')//ensure assets on page load
    cy.contains('Typos').click() 
    cy.contain('Typos')//confirms we landed on the page

    //Following cypress doc I couldn't get an "assert is false" type function or a working retry function. I wanted to re-run the test until the correct wording isn't there
    //so I had to revert to something less nice. Am sure if I knew Cypress and js I would find an very simple solution 
    cy.contains("Sometimes you'll see a typo, other times you won't.")
    cy.reload()
    cy.contains("Sometimes you'll see a typo, other times you won't.")
    cy.reload()
    cy.contains("Sometimes you'll see a typo, other times you won't.")
    cy.reload()
    cy.contains("Sometimes you'll see a typo, other times you won't.")
    cy.reload()
    cy.contains("Sometimes you'll see a typo, other times you won't.")

    })

    //Check Selenium link is clickable link
    it('Confirm selenium link works', () => 
    {
    cy.visit('https://the-internet.herokuapp.com/typos')
    cy.contains('Elemental Selenium').click()
    })



  })
  