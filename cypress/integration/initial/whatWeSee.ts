/// <reference types="cypress" />

describe('initial / what we see', () => {
    const rectQuery = '#shape-layers .rect-shape';
    const lineQuery = '#shape-layers .line-shape';
    const lineHandlerQuery = '#shape-layers .line-shape-handler';

    it('display initially 1 rect & 1 line', () => {
        cy.visit('http://localhost:3000/');
        cy.get(rectQuery).should('have.length', 1);
        cy.get(lineQuery).should('have.length', 1);
    });

    it('selecting rect & delete it', () => {
        cy.get(rectQuery).click();
        cy.get('body').type('{del}');
        cy.get(rectQuery).should('have.length', 0);
    });

    it('selecting line & delete it', () => {
        cy.get(lineHandlerQuery).click();
        cy.get('body').type('{del}');
        cy.get(lineQuery).should('have.length', 0);
    });
});
