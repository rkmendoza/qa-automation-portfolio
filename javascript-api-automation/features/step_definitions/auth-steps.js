import { Given, When, Then } from '@cucumber/cucumber';
import { expect } from 'chai';
import request from 'supertest';

const baseUrl = 'https://restful-booker.herokuapp.com';
let authResponse;

When('me autentico con usuario {string} y password {string}', async function (username, password) {
  authResponse = await request(baseUrl)
    .post('/auth')
    .send({ username, password })
    .expect(200);
    
  console.log('🔑 Response Status:', authResponse.status);
  console.log('🔑 Response Body:', authResponse.body);
});

Then('debería obtener un token válido', function () {
  expect(authResponse.body).to.have.property('token');
  expect(authResponse.body.token).to.be.a('string');
  expect(authResponse.body.token.length).to.be.greaterThan(0);
  console.log('✅ Token válido obtenido:', authResponse.body.token);
});