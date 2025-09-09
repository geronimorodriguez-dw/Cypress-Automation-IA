import {Given, When, Then} from "@badeball/cypress-cucumber-preprocessor";
import { oportunidades } from "../../support/page_object/darwoft";

Given("que un usario ingresa a la pagina de oportunidades de Darwoft", () => {
    cy.visit("https://www.careers-page.com/darwoft");
});
When("el usuario hace click en el botón de oportunidades", () => {
    oportunidades.getBotonOpotunidades().click();
});
Then("el usuario puede ver el buscador de oportunidades y escribir es el", () => {
    oportunidades.getBuscadorOportunidades().should("be.visible");
    oportunidades.getBuscadorOportunidades().type("Backend");
    oportunidades.getBotonBuscar().click();
})
Then("vemos la cantidad de oportunidades que hay disponibles", () => {
    oportunidades.getCantidadOportunidades().eq(1).should("be.visible").then(($el) => {
        cy.log("Texto encontrado: " + $el.text()); // Cypress log
        console.log("Texto encontrado:", $el.text()); // Consola del navegador
    });
;
    
});
Then("interceptamos el servicio de busqueda de oportunidades", () => {
    const servicio = "https://www.careers-page.com/api/v1.0/c/darwoft/jobs/?page_size=50&page=1&search=backend&country_new__in=&organization__in=&ordering=-is_pinned_in_career_page,-last_published_at";
    cy.request(servicio).as("oportunidades").then((response) => {
        cy.log(JSON.stringify(response.body.count)); // Muestra el contenido del servicio
    });
    
});
Then("la cantidad de oportunidades es igual al del servicio", () => {
    cy.get("@oportunidades").then((response) => {
        const resultado = JSON.stringify(response.body.count);
        oportunidades.getCantidadOportunidades().eq(1).should("contain", resultado);
        cy.log("Resultado: " + resultado);
    });
});