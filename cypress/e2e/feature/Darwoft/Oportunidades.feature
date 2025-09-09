Feature: prueba de servicios
    Scenario: validar la página de oportunidades de darwoft
        Given que un usario ingresa a la pagina de oportunidades de Darwoft
        When el usuario hace click en el botón de oportunidades
        Then el usuario puede ver el buscador de oportunidades y escribir es el
        Then vemos la cantidad de oportunidades que hay disponibles
        Then interceptamos el servicio de busqueda de oportunidades
        Then la cantidad de oportunidades es igual al del servicio