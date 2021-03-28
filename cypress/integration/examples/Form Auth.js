describe('Typos Suite', () => 
{
    //Goes to Form Authentication Page
    it('Clicks Form Auth Link', () => 
    {
  
    cy.visit('https://the-internet.herokuapp.com/')
    cy.contains('Elemental Selenium')//ensure assets on page load
    cy.contains('Form Authentication').click()
    cy.get('input[id="username"]')
    

    })

    it('Ensures authnetication fails with wrong credentials', () => 
    {  
    cy.visit('https://the-internet.herokuapp.com/')
    cy.contains('Form Authentication').click()
    cy.get('input[id="username"]').type('Jomsmith')
    cy.get('input[id="password"]').type('SuperSecretPassword')
    cy.get('button[type="submit"').click()
    cy.contains('Your username is invalid!')    

    })

    it('Ensures authnetication Passes with valid credentials', () => 
    {  
    cy.visit('https://the-internet.herokuapp.com/')
    cy.contains('Form Authentication').click()
    cy.get('input[id="username"]').type('tomsmith')
    cy.get('input[id="password"]').type('SuperSecretPassword!')
    cy.get('button[type="submit"').click()
    cy.contains('You logged into a secure area!')
    //cy.get('button.button secondary radius').click() - tried for over an hour to click logout. Nothing I tried worked.
    //cy.get('<a class="button secondary radius" href="/logout"><i class="icon-2x icon-signout"> Logout</i></a>').click()

    })


})