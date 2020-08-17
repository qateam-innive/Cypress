import HomePage from '../pinellasPages/HomePage'
import FactsPage from '../pinellasPages/FactsPage'
import Common from '../pinellasPages/Common/VerifyPageElements'
import DepartmentsPage from '../pinellasPages/DepartmentsPage'
import VendorsPage from '../pinellasPages/VendorsPage'
import CategoriesPage from '../pinellasPages/CategoriesPage'
import PayrollPage from '../pinellasPages/PayrollPage'

/*before(function(){
cy.fixture('pinellas').then(function(data){
    this.data=data


})
})*/


describe('PinellasSuite', function () {

    it('home', function () {
        cy.visit('https://pinellas-i360-k12-dev.ue.r.appspot.com')
        cy.wait(5000)
        cy.get("#navbarDropdown", { timeout: 40000 }).should('be.visible')
        cy.get("#navbarDropdown").trigger('mouseover');
        const hp = new HomePage()
        hp.home()
    })

    it('facts', function () {
        const fp = new FactsPage()
        fp.facts()
    })

    it('departments', function () {
        //const dp = new DepartmentsPage()
        const cm = new Common()
        //dp.department()
        cm.common()
       // cy.get('input[placeholder ="Search"]').type(data)

    })

    it.skip('vendors', function () {
        const vp = new VendorsPage()
        vp.vendors()
    })

    it.skip('categories', function () {
        const cp = new CategoriesPage()
        cp.categories()
    })
    
    it.skip('payroll', function () {
        const pp = new PayrollPage()
        pp.payroll()
    })    
})