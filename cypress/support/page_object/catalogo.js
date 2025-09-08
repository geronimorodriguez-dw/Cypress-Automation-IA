class Catalogo {
  getCantidadProductos() {
    return cy.get("[data-test='cant-productos']");
  }
  getNombre() {
    return cy.get('[data-js="cp"] >[class="nav-menu-cp-send"]');
  }
}

export const catalogo = new Catalogo();
