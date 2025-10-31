import { Given, When, Then } from '@cucumber/cucumber';
import { expect } from 'chai';
import request from 'supertest';

const baseUrl = 'https://jsonplaceholder.typicode.com';
let response;
let postData;

Given('que tengo acceso a la API de JSONPlaceholder', function () {
  // Setup inicial - no necesita acción específica
  console.log('Accediendo a JSONPlaceholder API...');
});

When('consulto el post con ID {string}', async function (postId) {
  response = await request(baseUrl)
    .get(`/posts/${postId}`);
});

When('consulto los posts del usuario con ID {string}', async function (userId) {
  response = await request(baseUrl)
    .get(`/users/${userId}/posts`);
});

When('creo un nuevo post con título {string} y cuerpo {string} para el usuario {string}', 
  async function (title, body, userId) {
    
  postData = {
    title: title,
    body: body,
    userId: parseInt(userId)
  };

  response = await request(baseUrl)
    .post('/posts')
    .send(postData);
});

Then('la respuesta debería tener status {int}', function (expectedStatus) {
  expect(response.status).to.equal(expectedStatus);
});

Then('el post debería tener ID {string}', function (expectedId) {
  expect(response.body.id).to.equal(parseInt(expectedId));
});

Then('el post debería tener un título válido', function () {
  expect(response.body.title).to.be.a('string');
  expect(response.body.title).to.not.be.empty;
});

Then('todos los posts deberían pertenecer al usuario {string}', function (expectedUserId) {
  response.body.forEach(post => {
    expect(post.userId).to.equal(parseInt(expectedUserId));
  });
});

Then('el post creado debería tener el título {string}', function (expectedTitle) {
  expect(response.body.title).to.equal(expectedTitle);
});


//nuevos

When('actualizo el post con ID {string} con título {string} y cuerpo {string}', async function (postId, newTitle, newBody) {
  const updateData = {
    title: newTitle,
    body: newBody,
    userId: 1
  };

  this.response = await request(baseUrl)
    .put(`/posts/${postId}`)
    .send(updateData);
});

When('elimino el post con ID {string}', async function (postId) {
  this.response = await request(baseUrl)
    .delete(`/posts/${postId}`);
});

Then('el post actualizado debería tener título {string}', function (expectedTitle) {
  expect(this.response.body.title).to.equal(expectedTitle);
});

When('consulto los TODOs del usuario con ID {string}', async function (userId) {
  this.response = await request(baseUrl)
    .get(`/users/${userId}/todos`);
});

When('consulto los álbumes del usuario con ID {string}', async function (userId) {
  this.response = await request(baseUrl)
    .get(`/users/${userId}/albums`);
});

Then('cada TODO debería tener userId {string}', function (expectedUserId) {
  this.response.body.forEach(todo => {
    expect(todo.userId).to.equal(parseInt(expectedUserId));
  });
});

Then('cada álbum debería tener userId {string}', function (expectedUserId) {
  this.response.body.forEach(album => {
    expect(album.userId).to.equal(parseInt(expectedUserId));
  });
});


