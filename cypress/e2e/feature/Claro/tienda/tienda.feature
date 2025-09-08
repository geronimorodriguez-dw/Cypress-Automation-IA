# cypress/e2e/filtrar_productos.feature
# language: es
Feature: Filtrado de productos en la Tienda Claro


  Scenario: Filtrar celulares por la marca Samsung
    Given que visito la página de equipos de la Tienda Claro
    When aplico el filtro de la marca "Samsung"
    Then el filtro de "Samsung" debería mostrarse como activo
