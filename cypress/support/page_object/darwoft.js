class Oportunidades{
    getBotonOpotunidades() {
        return cy.get('[class="btn btn-lg btn-outline-light mt-4"]')
    }
    getBuscadorOportunidades(){
        return cy.get('[class="search-field search-keyword form-control"]')
    }
    getBotonBuscar(){
        return cy.get('[class="btn btn-secondary btn-apply width-100"]')
    }
    getCantidadOportunidades(){
        return cy.get('[class="positions"]')
    }
}
export const oportunidades = new Oportunidades();