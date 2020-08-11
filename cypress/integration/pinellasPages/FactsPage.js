/// <reference types= "Cypress" />

class FactsPage
{
    facts()
    {
        //objects
        /*const pageTitle = cy.get('.media-body div.cm-h3.text-secondary').should('be.visible')
        const agency = cy.contains('Agency')
        const boardOfCountyCommissioners = cy.contains('Board of County Commissioners').should('be.visible')
        const cumulativeSpending = cy.contains('CUMULATIVE SPENDING-2020').should('be.visible')
        const previousYears = cy.contains('PREVIOUS YEARS')
        const otherPages = cy.contains('OTHER PAGES')*/

        
        //actions
        cy.get('.media-body div.cm-h3.text-secondary').should('be.visible').should('be.visible')
        cy.contains('Agency').should('be.visible')
        cy.contains('Board of County Commissioners').should('be.visible').should('be.visible')
        cy.contains('CUMULATIVE SPENDING-2020').should('be.visible').should('be.visible')
        cy.contains('PREVIOUS YEARS').should('be.visible')
        cy.contains('OTHER PAGES').should('be.visible')
        cy.get('ul.list-unstyled.cm-widget1.p-3.mb-0 > li:nth-child(1) > p:nth-child(1)').should('be.visible')
        cy.get('ul.list-unstyled.cm-widget1.p-3.mb-0 > li:nth-child(2) > p:nth-child(1)').should('be.visible')

}
}

export default FactsPage