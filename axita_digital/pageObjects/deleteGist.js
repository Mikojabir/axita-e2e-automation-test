class delGits {

    delbutton(){
        const button = cy.get(':nth-child(2) > form > .btn')
        button.click();
    };

    logout(){
        const ddBtn = cy.get('.Header-link > .dropdown-caret')
        ddBtn.should('be.visible')
        ddBtn.click();

        const btn = cy.get('.logout-form > .dropdown-item')
        btn.should('be.visible')
        btn.click();

        const btnOut = cy.get('.btn')
        btnOut.should('be.visible')
        btnOut.click();
    };


};

export default delGits;