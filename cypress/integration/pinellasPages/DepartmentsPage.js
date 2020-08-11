/// <reference types= "Cypress" />

class DepartmentsPage
{
    department()
    {
        cy.get('.media-body:nth-child(2)', { timeout: 40000 }).should('be.visible')
        cy.contains('Agency').should('be.visible')
        cy.contains('Fiscal Year').should('be.visible')
        cy.contains('Board of County Commissioners').should('be.visible')
        cy.contains('2020').should('be.visible')
        cy.contains('Total Departments').should('be.visible') 
        cy.contains('Total Count').should('be.visible')    
        cy.get('div > div.amcharts-chart-div > svg > g:nth-child(8) > g:nth-child(2) > path').should('be.visible')
        cy.contains('Combined Expenses').should('be.visible')
        cy.get('#GENERIC_COMPONENT > section > div > div > div > div.col-sm-12.col-lg-4.cm-cent-border > div:nth-child(2) > div > section > div > div > div.row.pl-3.pt-3 > div:nth-child(1) > div.cm-h4.text-default.text-uppercase.font-weight-normal')
        .should('be.visible')
        cy.get('#GENERIC_COMPONENT > section > div > div > div > div.col-sm-12.col-lg-4.cm-cent-border > div:nth-child(2) > div > section > div > div > div.row.pl-3.pt-3 > div:nth-child(2) > div.cm-h4.text-default.text-uppercase.font-weight-normal')
        .should('be.visible')
        //cy.get('#__AmCharts_React_48__ > div > div.amcharts-chart-div > svg > g:nth-child(5) > g:nth-child(1) > g > g > path')
       // .should('be.visible')
        cy.contains('Top Departments').should('be.visible')
//cy.get('#__AmCharts_React_49__ > div > div.amcharts-chart-div > svg > g:nth-child(2) > path:nth-child(1)')
//.should('be.visible')
        cy.contains('Board of County Commissioners').click()
        cy.wait(3000)
        cy.contains('Clerk of the Circuit Court').click()
        cy.wait(3000)
        cy.contains('Total Departments').should('be.visible')
        cy.contains('Combined Expenses').should('be.visible')
        cy.contains('Top Departments').should('be.visible')

    }}
    export default DepartmentsPage