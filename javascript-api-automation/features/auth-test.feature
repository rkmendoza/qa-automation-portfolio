# language: es
@auth
Característica: Probar autenticación Restful Booker

  Escenario: Obtener token de autenticación
    Dado que tengo acceso a la API de Restful Booker
    Cuando me autentico con usuario "admin" y password "password123"
    Entonces debería obtener un token válido