/// <reference types="Cypress" />

class HomePage {


        home() {

              /*  const pageTitle = cy.get('a[href="/index.html"]')
                const logo1 = cy.get('img[src="/media/seal-county.png"]')
                const logo2 = cy.get('li.nav-item.top-right-img.ml-2.hidden-mobile > a')
                const tile1Image = cy.get('img[src="media/increase.png"]')
                const tile1Name = cy.get('#cummilativeTilesDiv > div:nth-child(1) > div div.cm-p')
                const tile2Image = cy.get('img[src="media/Revenue.png"]')
                const tile2Name = cy.get('#cummilativeTilesDiv > div:nth-child(2) > div div.cm-p')
                const tile3Image = cy.get('img[src="media/investments.png"]')
                const tile3Name = cy.get('#cummilativeTilesDiv > div:nth-child(3) > div div.cm-p')
                const tile4Image = cy.get('img[src="media/capital assets.png"]')
                const tile4Name = cy.get('#cummilativeTilesDiv > div:nth-child(4) > div div.cm-p')*/

                cy.wait(5000)

                //verify visibility of page title
                cy.get('a[href="/index.html"]').should('be.visible')

                //verify visibility of logos
                cy.get('img[src="/media/seal-county.png"]').should('be.visible')
                cy.get('li.nav-item.top-right-img.ml-2.hidden-mobile > a').should('be.visible')

                //verify visibility of contents of four tiles
                cy.get('img[src="media/increase.png"]').should('be.visible')
                cy.get('#cummilativeTilesDiv > div:nth-child(1) > div div.cm-p').should('be.visible')
                cy.get('img[src="media/Revenue.png"]').should('be.visible')
                cy.get('#cummilativeTilesDiv > div:nth-child(2) > div div.cm-p').should('be.visible')
                cy.get('img[src="media/investments.png"]').should('be.visible')
                cy.get('#cummilativeTilesDiv > div:nth-child(3) > div div.cm-p').should('be.visible')
                cy.get('img[src="media/capital assets.png"]').should('be.visible')
                cy.get('#cummilativeTilesDiv > div:nth-child(4) > div div.cm-p').should('be.visible')

                //verify visibility of contents of county transparency tiles
                cy.get('#countyTransparencyDiv > div:nth-child(1) > div > div.card-body > div.card-title.cm-h4').should('be.visible')
                cy.get('#countyTransparencyDiv > div:nth-child(1) > div > div.card-body > div.card-title.cm-h4').click()
                cy.wait(6000)
                cy.get('#GENERIC_COMPONENT > section > div > div > div > div > div > div.col-sm-6.col-lg-3.order-sm-2.order-lg-3.hidden-widget > div > ul > li:nth-child(1) > p > a', { timeout: 40000 }).should('be.visible');
                cy.get('#GENERIC_COMPONENT > section > div > div > div > div > div > div.col-sm-6.col-lg-3.order-sm-2.order-lg-3.hidden-widget > div > ul > li:nth-child(1) > p > a').click()



        }
}
export default HomePage