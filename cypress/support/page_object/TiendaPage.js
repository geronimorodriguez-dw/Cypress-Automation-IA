// cypress/support/page_objects/tienda.page.js

class TiendaPage {
  /**
   * Visita directamente la página que lista todos los equipos.
   * Es más rápido y estable que hacer clic en la navegación.
   */
  visitEquiposPage() {
    cy.visit("https://tienda.claro.com.ar/equipos");
  }

  /**
   * Busca en la página un filtro con el nombre de la marca y le hace clic.
   * Usamos { force: true } por si el elemento no es 100% visible.
   * @param {string} brandName - El nombre de la marca a filtrar (ej. "Samsung")
   */
  filtroMarca(brandName) {
    cy.contains('label', brandName).click({ force: true });
  }

  /**
   * Verifica que el filtro se aplicó correctamente.
   * La página de Claro muestra una "etiqueta" del filtro activo.
   * @param {string} brandName - El nombre de la marca que debería estar activa.
   */
  verificarFiltroAplicado(brandName) {
    // Buscamos el contenedor de filtros seleccionados y verificamos que contenga el nombre de la marca.
    cy.get('div[class^="selected-filters"]').contains(brandName).should('be.visible');
  }
}

// Exportamos una única instancia de la clase para usarla en toda la prueba.
export const tiendaPage = new TiendaPage();
