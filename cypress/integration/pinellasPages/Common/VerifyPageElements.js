/// <reference types= "Cypress" />

class Common
{
    common()
    {

        const listbox1 = '#GENERIC_COMPONENT:nth-child(2)  div.elastic-prompt-component-selector:nth-child(1) div[role="listbox"]'
        const listItems = '#GENERIC_COMPONENT:nth-child(2)  div.elastic-prompt-component-selector:nth-child(1) div[role="option"] > span'

        cy.wait(5000)
        cy.contains('Agency').should('be.visible')
        cy.contains('Fiscal Year').should('be.visible')
        //verify default value
        cy.contains('Board of County Commissioners').should('be.visible')
        cy.contains('2020').should('be.visible')
        //verify dropdown values
        cy.get(listbox1).click()
        cy.get(listItems).should('have.length', 2)
       // cy.get(listItems).should('have.all.keys', 'Board of County Commissioners', 'Clerk of the Circuit Court')
        
        
    }}
    export default Common