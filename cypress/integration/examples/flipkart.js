describe('PinellasSuite',function(){
    
    it('home',function()
    {
        cy.visit('https://www.flipkart.com')
        cy.wait(5000)
        cy.get("#container > div > div.zi6sUf > div > ul > li:nth-child(1) > span").trigger('mouseover');
        cy.wait(5000)
    })
})
