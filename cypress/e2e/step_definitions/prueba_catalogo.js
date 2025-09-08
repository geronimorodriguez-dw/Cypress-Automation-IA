import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import { catalogo} from "../../support/page_object/catalogo";

Given(`que el usuario ingresa al catalogo de la Tienda`, () => {
    cy.visit("https://tienda.claro.com.ar/plp/catalogo");

});

When(`interceptamos el servicio del catalogo`, () => {
  const servicio = "bySearchTerm?searchTerm=*&categoryId=&pageNumber=1&pageSize=48&orderBy=&minPrice=&maxPrice=&friendlyUrl=%2Fes%2Fclaro%2Fcatalogo";
  cy.request(servicio).as("catalogo");
  cy.reload();
});

Then(`validamos que se muestre la cantidad de productos`, () => {
  catalogo.getCantidadProductos().should("exist");
});

Then(`la cantidad de productos es igual al del servicio`, () => {
  cy.get("@catalogo").then((catalogo) => {
    const resultado = catalogo.response.body.page.total_results;
    catalogo.getCantidadProductos().should("contain", resultado);
  });
});
