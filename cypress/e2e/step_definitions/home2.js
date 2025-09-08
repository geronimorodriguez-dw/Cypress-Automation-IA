import { Given, When } from "@badeball/cypress-cucumber-preprocessor";
import {homepage} from "../../support/page_object/homepage";


Given("que abro la página principal de la pagina Claro", () => {
cy.visit("/");
});
When("hace click en donde estamoss", () => {
homepage.getUbicacionBtn().click();
});