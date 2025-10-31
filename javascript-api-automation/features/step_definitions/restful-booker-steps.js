import { Given, When, Then } from '@cucumber/cucumber';
import { expect } from 'chai';
import request from 'supertest';
import { bookingSchema, authSchema } from '../support/schemas.js';
import { SchemaValidator } from '../support/validators.js';

const baseUrl = 'https://restful-booker.herokuapp.com';
let response;
let authToken;
let bookingId;

Given('que tengo acceso a la API de Restful Booker', function () {
  // Setup inicial
});

Given('tengo un token de autenticación válido', async function () {
  const authResponse = await request(baseUrl)
    .post('/auth')
    .send({
      username: "admin",    // ✅ Usuario correcto
      password: "password123" // ✅ Password correcto
    })
    .expect(200);

  authToken = authResponse.body.token;
  console.log('🔑 Token obtenido:', authToken); // Para debugging
  SchemaValidator.assertSchema(authSchema, authResponse.body);
});

Given('existe una reserva con ID válido', async function () {
  // Primero creamos una reserva para tener un ID válido
  const bookingData = {
    firstname: "Juan",
    lastname: "Perez",
    totalprice: 150,
    depositpaid: true,
    bookingdates: {
      checkin: "2024-01-01",
      checkout: "2024-01-05"
    },
    additionalneeds: "Desayuno"
  };

  const createResponse = await request(baseUrl)
    .post('/booking')
    .set('Accept', 'application/json')
    .send(bookingData)
    .expect(200);

  bookingId = createResponse.body.bookingid;
});


When('creo una reserva con los datos requeridos', async function () {
  const bookingData = {
    "firstname": "Maria",
    "lastname": "Garcia",
    "totalprice": 200,
    "depositpaid": false,
    "bookingdates": {
        "checkin" : "2018-01-01",
        "checkout" : "2019-01-01"
    },
    "additionalneeds": "Estacionamiento"
  };

  response = await request(baseUrl)
    .post('/booking')
    .set('Accept', 'application/json')
    .send(bookingData);
});

When('consulto la reserva por ID', async function () {
  response = await request(baseUrl)
    .get(`/booking/${bookingId}`)
        .set('Accept', 'application/json');
});

// When('actualizo la reserva con nuevos datos', async function () {
//   const updateData = {
//     firstname: "Maria Actualizada",
//     lastname: "Garcia Actualizada",
//     totalprice: 250,
//     depositpaid: true,
//     bookingdates: {
//       checkin: "2024-02-01",
//       checkout: "2024-02-15"
//     },
//     additionalneeds: "Desayuno + Estacionamiento"
//   };

//   response = await request(baseUrl)
//     .put(`/booking/${bookingId}`)
//     .set('Cookie', `token=${authToken}`)
//     .send(updateData);
// });


When('actualizo la reserva con nuevos datos', async function () {
  const updateData = {
    firstname: "Maria Actualizada",
    lastname: "Garcia Actualizada", 
    totalprice: 250,
    depositpaid: true,
    bookingdates: {
      checkin: "2024-02-01",
      checkout: "2024-02-15"
    },
    additionalneeds: "Desayuno + Estacionamiento"
  };

  response = await request(baseUrl)
    .put(`/booking/${bookingId}`)
    .set('Authorization', `Basic ${authToken}`) // ✅ Header correcto
    .set('Accept', 'application/json')
    .send(updateData);
});


When('elimino la reserva', async function () {
  response = await request(baseUrl)
    .delete(`/booking/${bookingId}`)
    .set('Authorization', `Basic ${authToken}`) // ✅ Header correcto
    .set('Accept', 'application/json');
  });

Then('la reserva debería crearse exitosamente', function () {
  expect(response.status).to.equal(200);
  expect(response.body).to.have.property('bookingid');
  expect(response.body.bookingid).to.be.a('number');
});

Then('la respuesta debería tener el schema de reserva válido', function () {
  if (response.body.booking) {
    // Para respuestas GET/PUT que devuelven {booking: {...}}
    SchemaValidator.assertSchema(bookingSchema, response.body.booking);
  } else {
    // Para respuestas POST que devuelven el objeto directamente
    SchemaValidator.assertSchema(bookingSchema, response.body);
  }
});

Then('la reserva debería actualizarse exitosamente', function () {
  expect(response.status).to.equal(200);
});

Then('la reserva debería eliminarse exitosamente', function () {
  expect(response.status).to.equal(201);
});


Then('la respuesta debería tener status code {int}', function (expectedStatus) {
  expect(response.status).to.equal(expectedStatus);
});
