import { Given, When } from "@badeball/cypress-cucumber-preprocessor";
import { homepage } from "../../support/page_object/homepage";



Given("que abro la página principal de Claro", () => {
  cy.visit("/");
});
When("hace click en donde estamos", () => {
  homepage.getUbicacionBtn().click();
});
