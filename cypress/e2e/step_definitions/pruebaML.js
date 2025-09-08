import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import { info } from "../../support/page_object/pruebaML";

Given("que yo ingreso a la pagina de Mercado Libre", () => {
  cy.visit("https://www.mercadolibre.com.ar/");
});

When("visualizo mi nombre en el header de la página", () => {
  info.getNombre().should("exist");
}); 

Then("valido que el nombre sea correcto", () => {
  info.getNombre().should("contain", " Capital Federal");
});

Then("valido que se muestre correctamente el logo de ML", () => {
    info.getLogo().should("be.visible");
})
Then("validamos que se vean correctamente los accesos dinámicos", () => {
    info.getDinamicCards().should("have.length", 6);
    info.getDinamicCards().should("be.visible");

})