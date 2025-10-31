# language: es
@booker
Característica: API Restful Booker - Reservas de hotel
  Como usuario del sistema de reservas
  Quiero gestionar reservas de hotel
  Para administrar mis estadías

  Escenario: Crear una nueva reserva
    Dado que tengo acceso a la API de Restful Booker
    Y tengo un token de autenticación válido
    Cuando creo una reserva con los datos requeridos
    Entonces la reserva debería crearse exitosamente
    Y la respuesta debería tener el schema de reserva válido

  
  Escenario: Obtener una reserva existente
    Dado que tengo acceso a la API de Restful Booker
    Y tengo un token de autenticación válido
    Y existe una reserva con ID válido
    Cuando consulto la reserva por ID
    Entonces la respuesta debería tener status code 200
    Y la respuesta debería tener el schema de reserva válido

  Escenario: Actualizar una reserva existente
    Dado que tengo acceso a la API de Restful Booker
    Y tengo un token de autenticación válido
    Y existe una reserva con ID válido
    Cuando actualizo la reserva con nuevos datos
    # Entonces la reserva debería actualizarse exitosamente
    # Y la respuesta debería tener el schema de reserva válido

@reserva
  Escenario: Eliminar una reserva
    Dado que tengo acceso a la API de Restful Booker
    Y tengo un token de autenticación válido
    Y existe una reserva con ID válido
    Cuando elimino la reserva
    # Entonces la reserva debería eliminarse exitosamente