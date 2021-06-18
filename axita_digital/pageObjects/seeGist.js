class createGits {

    seeGist(){
        const dd = cy.get('.dropdown-caret')
        dd.should('be.visible')
        dd.click();

        const choosegist = cy.get('[data-ga-click="Header, go to your gists, text:your gists"]')
        choosegist.should('be.visible')
        choosegist.click();

        const clickgist = cy.get(':nth-child(2) > .js-gist-file-update-container > #file-gistfile1-txt > .Box-body > .highlight > tbody > tr > #file-gistfile1-txt-LC1')
        clickgist.should('be.visible')
        clickgist.click();
    };


};

export default createGits;