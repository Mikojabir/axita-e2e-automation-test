class createGits {

    addBtn(){
        const button = cy.get(':nth-child(6) > .Header-link > .d-none')
        button.click();
    };

    fieldDesc(){
        const desc = cy.get('.input-block');
        desc.clear();
        desc.type('test automation gits axita digital labs');
    };

    fieldLine(){
        const line = cy.get('.CodeMirror-line')
        line.clear();
        line.type('Please create end to end UI automation test with user story')
    };

    addGist(){
        const button = cy.get('.hx_create-pr-button')
        button.click();
    };

    //see result of gist after created
    rawBtn(){
        const button = cy.get('.file-actions > .btn-sm')
        button.click();
    };

};

export default createGits;