class Info{
    getNombre() {
    return cy.get('[data-js="cp"] >[class="nav-menu-link-cp"]');
  }
  getLogo(){
    return cy.get('[class="nav-logo"]');
  }
  getDinamicCards(){
    return cy.get('[class="dynamic-access-card-ecosistemic__action"]');
  }
}
export const info = new Info();