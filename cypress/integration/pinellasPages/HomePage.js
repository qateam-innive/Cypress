/// <reference types="Cypress" />

class HomePage {
        home() {
                //Objects
                const pageTitle = 'a[href="/index.html"]'
                const logo1 = 'img[src="/media/seal-county.png"]'
                const logo2 = 'li.nav-item.top-right-img.ml-2.hidden-mobile > a'
                const tile1Image = 'img[src="media/increase.png"]'
                const tile1Name = '#cummilativeTilesDiv > div:nth-child(1) > div div.cm-p'
                const tile2Image = 'img[src="media/Revenue.png"]'
                const tile2Name = '#cummilativeTilesDiv > div:nth-child(2) > div div.cm-p'
                const tile3Image = 'img[src="media/investments.png"]'
                const tile3Name = '#cummilativeTilesDiv > div:nth-child(3) > div div.cm-p'
                const tile4Image = 'img[src="media/capital assets.png"]'
                const tile4Name = '#cummilativeTilesDiv > div:nth-child(4) > div div.cm-p'

                //actions
                cy.wait(5000)

                //verify visibility of page title
                cy.get(pageTitle).should('be.visible')

                //verify visibility of logos
                cy.get(logo1).should('be.visible')
                cy.get(logo2).should('be.visible')

                //verify visibility of contents of four tiles
                cy.get(tile1Image).should('be.visible')
                cy.get(tile1Name).should('be.visible')
                cy.get(tile2Image).should('be.visible')
                cy.get(tile2Name).should('be.visible')
                cy.get(tile3Image).should('be.visible')
                cy.get(tile3Name).should('be.visible')
                cy.get(tile4Image).should('be.visible')
                cy.get(tile4Name).should('be.visible')

                //verify visibility of contents of county transparency tiles
                cy.get('#countyTransparencyDiv > div:nth-child(1) > div > div.card-body > div.card-title.cm-h4').should('be.visible')
                cy.get('#countyTransparencyDiv > div:nth-child(1) > div > div.card-body > div.card-title.cm-h4').click()
               
        }
}
export default HomePage