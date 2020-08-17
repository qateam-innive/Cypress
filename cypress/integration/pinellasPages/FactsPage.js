/// <reference types= "Cypress" />

class FactsPage
{
    facts()
    {
        //objects
        const pageTitle = '.media-body > div.cm-h3.text-secondary'
        const agency = 'AGENCY'
        const boardOfCountyCommissioners = 'Board of County Commissioners'
        const cumulativeSpending = 'CUMULATIVE SPENDING-2020'
        const previousYears = 'PREVIOUS YEARS'
        const otherPages = 'OTHER PAGES'
        const DepartmentsPage = 'a[href="departments.html"]'
        

        
        //actions
        cy.wait(7000)
        cy.get(pageTitle, { timeout: 40000 }).should('be.visible')
        cy.contains(agency, { timeout: 40000 }).should('be.visible')
        cy.contains(boardOfCountyCommissioners, { timeout: 40000 }).should('be.visible')
        cy.contains(cumulativeSpending, { timeout: 40000 }).should('be.visible')
        cy.contains(previousYears, { timeout: 40000 }).should('be.visible')
        cy.contains(otherPages, { timeout: 40000 }).should('be.visible')
        cy.get(DepartmentsPage, { timeout: 40000 }).should('be.visible')
        cy.get(DepartmentsPage).click()

}


}

export default FactsPage