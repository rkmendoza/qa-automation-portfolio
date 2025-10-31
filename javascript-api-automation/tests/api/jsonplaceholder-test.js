import { expect } from 'chai';
import request from 'supertest';

describe('JSONPlaceholder API Tests - CRUD Completo', () => {
  const baseUrl = 'https://jsonplaceholder.typicode.com';
  let createdPostId;

  // TESTS EXITOSOS
  describe('Casos de éxito - CRUD Completo', () => {
    it('debería obtener todos los posts - GET /posts', async () => {
      const response = await request(baseUrl)
        .get('/posts')
        .expect(200);

      expect(response.body).to.be.an('array');
      expect(response.body).to.have.lengthOf(100); // JSONPlaceholder siempre retorna 100 posts
      
      const firstPost = response.body[0];
      expect(firstPost).to.include.all.keys('id', 'title', 'body', 'userId');
    });

    it('debería obtener un post específico - GET /posts/1', async () => {
      const response = await request(baseUrl)
        .get('/posts/1')
        .expect(200);

      expect(response.body.id).to.equal(1);
      expect(response.body.title).to.be.a('string').that.is.not.empty;
      expect(response.body.body).to.be.a('string').that.is.not.empty;
      expect(response.body.userId).to.equal(1);
    });

    it('debería crear un nuevo post - POST /posts', async () => {
      const newPost = {
        title: 'Mi nuevo post de prueba',
        body: 'Este es el contenido de mi post de prueba',
        userId: 1
      };

      const response = await request(baseUrl)
        .post('/posts')
        .send(newPost)
        .set('Content-type', 'application/json; charset=UTF-8')
        .expect(201);

      expect(response.body).to.have.property('id');
      expect(response.body.title).to.equal(newPost.title);
      expect(response.body.body).to.equal(newPost.body);
      expect(response.body.userId).to.equal(newPost.userId);

      // Guardamos el ID para usar en update y delete
      createdPostId = response.body.id;
    });

    it('debería actualizar un post existente - PUT /posts/1', async () => {
      const updatedPost = {
        id: 1,
        title: 'Post actualizado',
        body: 'Contenido actualizado del post',
        userId: 1
      };

      const response = await request(baseUrl)
        .put('/posts/1')
        .send(updatedPost)
        .expect(200);

      expect(response.body.title).to.equal(updatedPost.title);
      expect(response.body.body).to.equal(updatedPost.body);
      expect(response.body.id).to.equal(1);
    });

    it('debería actualizar parcialmente un post - PATCH /posts/1', async () => {
      const partialUpdate = {
        title: 'Solo el título fue actualizado'
      };

      const response = await request(baseUrl)
        .patch('/posts/1')
        .send(partialUpdate)
        .expect(200);

      expect(response.body.title).to.equal(partialUpdate.title);
      // El body y userId deberían mantenerse igual
      expect(response.body.body).to.be.a('string').that.is.not.empty;
      expect(response.body.userId).to.equal(1);
    });

    it('debería eliminar un post - DELETE /posts/1', async () => {
      await request(baseUrl)
        .delete('/posts/1')
        .expect(200);
      // JSONPlaceholder simula el delete, siempre retorna 200
    });
  });

  // TESTS DE ERRORES Y CASOS FALLIDOS
 describe('Casos de error - Pruebas de fallos esperados', () => {
  it('debería fallar al obtener un post que no existe - GET /posts/9999', async () => {
    await request(baseUrl)
      .get('/posts/9999')
      .expect(404);
  });

  it('debería manejar posts con datos incompletos - POST /posts', async () => {
    const invalidPost = {
      // Falta title y body, solo userId
      userId: 1
    };

    const response = await request(baseUrl)
      .post('/posts')
      .send(invalidPost)
      .expect(400); // JSONPlaceholder acepta posts incompletos

    expect(response.body).to.have.property('id');
    expect(response.body.userId).to.equal(1);
  });

  it('debería fallar al actualizar post que no existe - PUT /posts/9999', async () => {
    const updatedPost = {
      title: 'Intentando actualizar post inexistente',
      body: 'Este post no debería existir',
      userId: 1
    };

    await request(baseUrl)
      .put('/posts/9999')
      .send(updatedPost)
      .expect(500); // JSONPlaceholder retorna 500 para este caso
  });

  it('debería fallar con método no permitido - POST /posts/1', async () => {
    await request(baseUrl)
      .post('/posts/1') // POST no está permitido en recurso específico
      .send({ title: 'test' })
      .expect(404);
  });

  it('debería validar estructura de respuesta incorrecta', async () => {
    const response = await request(baseUrl)
      .get('/posts/1')
      .expect(200);

    // Verificamos que NO tenga propiedades que no debería tener
    expect(response.body).to.not.have.property('invalidProperty');
    expect(response.body).to.not.have.property('createdAt');
  });
});

  // TESTS ADICIONALES PARA USUARIOS
  describe('Tests adicionales - Recursos relacionados', () => {
    it('debería obtener posts de un usuario específico - GET /users/1/posts', async () => {
      const response = await request(baseUrl)
        .get('/users/1/posts')
        .expect(200);

      expect(response.body).to.be.an('array');
      
      // Todos los posts deberían ser del usuario 1
      response.body.forEach(post => {
        expect(post.userId).to.equal(1);
      });
    });

    it('debería obtener comentarios de un post - GET /posts/1/comments', async () => {
      const response = await request(baseUrl)
        .get('/posts/1/comments')
        .expect(200);

      expect(response.body).to.be.an('array');
      expect(response.body).to.have.lengthOf.at.least(1);
      
      const firstComment = response.body[0];
      expect(firstComment).to.include.all.keys('id', 'name', 'email', 'body');
      expect(firstComment.postId).to.equal(1);
    });
  });
});