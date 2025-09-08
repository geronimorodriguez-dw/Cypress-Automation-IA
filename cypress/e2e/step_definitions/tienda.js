///cypress/e2e/filtrar_productos/filtrar_productos.js

import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
// Importamos nuestro page object para poder usar sus métodos
import { tiendaPage } from "../../support/page_object/TiendaPage";

Given("que visito la página de equipos de la Tienda Claro", () => {
  tiendaPage.visitEquiposPage();
  //llama a la clase y aplica el metodo que va a realizar el paso, en este caso visitar la tienda.
});

When("aplico el filtro de la marca {string}", (brandName) => {
  tiendaPage.filtroMarca(brandName)
  //llama a la clase y aplica el método acompañado de una variable de tipo "string", que va a ser la marca ej: Samsung.
});

Then("el filtro de {string} debería mostrarse como activo", (brandName) => {
  tiendaPage.verificarFiltroAplicado(brandName);
  // el metodo "verificarFiltroAplicado" se encargará de validar si el pasó anterior se realizó correctamente.
});
