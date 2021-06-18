import loginApps from "../axita_digital/pageObjects/homepage";
import createGits from "../axita_digital/pageObjects/createGits";
import seeGists from "../axita_digital/pageObjects/seeGist";
import deleteGist from "../axita_digital/pageObjects/deleteGist";

describe('UI Automation Test',function(){

    it('Login and Create Gist',function(){

        const login = new loginApps;
        const gistadd = new createGits;

        login.visit();
        login.view();

        login.sigInBtn();

        //Login Form
        login.fieldLogin();
        login.fieldPass();
        login.loginBtn();

        //Create Gits
        gistadd.addBtn();
        gistadd.fieldDesc({timeout: 1000});
        gistadd.fieldLine();
        gistadd.addGist();


    });

    it('See Gist after created, delete and logout',function(){
        const login = new loginApps;
        const gist = new seeGists;
        const delgist = new deleteGist;

        login.visit();
        login.view();

        login.sigInBtn();

        //Login Form
        login.fieldLogin();
        login.fieldPass();
        login.loginBtn();

        //see gist
        gist.seeGist();

        //validate
        cy.get('#file-gistfile1-txt-LC1').should('have.text', 'Please create end to end UI automation test with user story')

        cy.wait(1000);

        const btnClickgist = cy.get(':nth-child(2) > .gist-snippet-meta > .col-lg-5 > :nth-child(1) > .Link--muted > .octicon')
        btnClickgist.click();

        cy.wait(1000);

        //delete file
        delgist.delbutton();

        //logout
        delgist.logout();

    });

});