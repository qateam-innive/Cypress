describe('Remote',function(){
    it('test1',function(){

    cy.visit('https://dev-dot-sfusd-i360-k12-dev.uc.r.appspot.com/')
//cy.visit( 'https://disd.remotelearning.innive.io/' )
//       cy.get('#Email').type('yogavardhanib@inniveinc.com')
//cy.get('#Email').type('dhakshayanis@inniveinc.com')
/*
cy.get('#next').click()
cy.get('#password').type('Eashwari')
cy.get('#submit').click()*/
cy.get('img[src="media/arrowright.png"]', { timeout: 60000 }).should('be.visible');
cy.get('img[src="media/arrowright.png"]').click()
cy.wait(6000)
cy.get('#tab-0 > div.nav-content > div > ul > a', { timeout: 60000 })
cy.get('#tab-0 > div.nav-content > div > ul > a').trigger('mouseover');
//cy.get('#EXTERNAL_GENERIC_COMPONENT > section > div > section > div.external-generic-component-child > div:nth-child(1) > div > div:nth-child(1) > span', { timeout: 40000 }).should('be.visible')

//cy.get('#EXTERNAL_GENERIC_COMPONENT > section > div > section > div.external-generic-component-child > div:nth-child(2) > div > div.react-datepicker-wrapper > div > input', { timeout: 40000 }).should('be.visible')
//cy.get('#MULTIPLE_INSTANCE_COMPONENT > section > div.wrap-component-top > div:nth-child(2) > section > div > div:nth-child(1) > div > div > div').should('be.visible')


})


})