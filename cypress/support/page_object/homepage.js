class Homepage{
    getUbicacionBtn(){
        return cy.get('[id="tagDondeEstamos"]')
    }
}
export const homepage= new Homepage();