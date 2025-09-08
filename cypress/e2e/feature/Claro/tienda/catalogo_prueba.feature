Feature: Prueba de catalogo

    Scenario: Prueba catalogo
        Given que el usuario ingresa al catalogo de la Tienda
        When interceptamos el servicio del catalogo
        Then validamos que se muestre la cantidad de productos
        Then la cantidad de productos es igual al del servicio