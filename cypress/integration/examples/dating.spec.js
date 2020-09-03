
/// <reference types="cypress" />

describe('My First Test', () => {
    it('Does not do much!', () => {
cy.visit('http://taskman.geekydev.com/')
cy.get('[type="text"]').clear().type('admin@taskman.com')
cy.get('[type="password"]').clear().type('password')
cy.get('.custom-button').click()
// cy.get('.heading-admin-container > img').click()
// cy.get('.logout-container > :nth-child(2)').click()
cy.get(':nth-child(4) > .sidebar-card-heading').click()
cy.get('[data-row-key="1"] > :nth-child(1) > a').click()
cy.get(':nth-child(4) > .sidebar-card-heading').click()
cy.get('[data-row-key="1"] > :nth-child(7) > .ant-btn > span').click()
cy.get(':nth-child(5) > .sidebar-card-heading').click()
cy.get('[placeholder="Name"]').type('Sumit')
cy.get('[type="email"]').type('admin00@gmail.com')
cy.get('[placeholder="Phone Number"]').type(9999999999)
cy.get('[type="password"]').type(123456)
cy.get('.custom-button').click()
cy.get('.heading-admin-container > img').click()
cy.get('.logout-container > :nth-child(2)').click()



    })})
