import config from "../config";

class login {

    visit() {
        cy.visit(config.baseURL);
        cy.wait(3000);
    };

    view(){
        cy.viewport(1920, 1080);
    };

    sigInBtn(){
        const signMenu = cy.get('.f4 > .mr-3');
        signMenu.should('be.visible')
        signMenu.click();
    };

    fieldLogin(){
        const user = cy.get('#login_field');
        user.should('be.visible')
        user.clear();
        user.type(config.user);
    };

    fieldPass(){
        const pass = cy.get('#password');
        pass.should('be.visible')
        pass.clear();
        pass.type(config.pass);
    };

    loginBtn(){
        const button = cy.get('.btn');
        button.should('be.visible')
        button.click();
    };

};

export default login;