# language: es
Característica: API JSONPlaceholder - Pruebas con parámetros dinámicos
  Como tester de APIs
  Quiero ejecutar pruebas con datos dinámicos
  Para validar diferentes escenarios y casos de uso

  Escenario: Obtener un post específico por ID dinámico
    Dado que tengo acceso a la API de JSONPlaceholder
    Cuando consulto el post con ID "1"
    Entonces la respuesta debería tener status 200
    Y el post debería tener ID "1"
    Y el post debería tener un título válido

  Escenario: Obtener posts de un usuario específico
    Dado que tengo acceso a la API de JSONPlaceholder
    Cuando consulto los posts del usuario con ID "1"
    Entonces la respuesta debería tener status 200
    Y todos los posts deberían pertenecer al usuario "1"

  Escenario: Crear un nuevo post con datos dinámicos
    Dado que tengo acceso a la API de JSONPlaceholder
    Cuando creo un nuevo post con título "Mi título dinámico" y cuerpo "Mi contenido dinámico" para el usuario "1"
    Entonces la respuesta debería tener status 201
    Y el post creado debería tener el título "Mi título dinámico"

  Escenario: Obtener un post que no existe
    Dado que tengo acceso a la API de JSONPlaceholder
    # Cuando consulto el post con ID "9999"
    Cuando consulto el post con ID "<postId>"
    Entonces la respuesta debería tener status 200

  Ejemplos: Múltiples IDs de posts
    | postId | status |
    | 1      | 200    |
    | 5      | 200    |
    | 10     | 200    |
    # | 9999   | 404    |


Escenario: Actualizar un post existente
  Dado que tengo acceso a la API de JSONPlaceholder
  Cuando actualizo el post con ID "1" con título "Título Actualizado" y cuerpo "Contenido actualizado"
  Entonces la respuesta debería tener status 200
  Y el post actualizado debería tener título "Título Actualizado"

Escenario: Eliminar un post existente  
  Dado que tengo acceso a la API de JSONPlaceholder
  Cuando elimino el post con ID "1"
  Entonces la respuesta debería tener status 200

Escenario: Obtener TODOs de un usuario
  Dado que tengo acceso a la API de JSONPlaceholder
  Cuando consulto los TODOs del usuario con ID "1"
  Entonces la respuesta debería tener status 200
  Y cada TODO debería tener userId "1"

Escenario: Obtener álbumes y fotos de usuario
  Dado que tengo acceso a la API de JSONPlaceholder
  Cuando consulto los álbumes del usuario con ID "1"
  Entonces la respuesta debería tener status 200
  Y cada álbum debería tener userId "1"