import "./commands"
const url = "https://tienda.claro.com.ar/plp/catalogo";
cy.origin(url, () => {
    cy.on("uncaught:exception", (err, runnable) => {
      //puede que el sitio al que nos redirigimos tenga algún error
      //por lo cual, para continuar con el test, ignoramos dicho error
      return false;
    });
  });
  cy.visit(url);
  cy.url().should("contain", url);