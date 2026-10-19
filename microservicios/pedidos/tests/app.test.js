const request = require('supertest');
const app = require('../src/app');
const pool = require('../src/db');

afterAll(async () => {
  await pool.end();
});

describe('Pruebas del Microservicio de Pedidos', () => {
  test('GET /health debe responder correctamente', async () => {
    const response = await request(app).get('/health');
    expect(response.statusCode).toBe(200);
    expect(response.body.servicio).toBe('pedidos');
  });

  test('GET /pedidos debe devolver una lista', async () => {
    const response = await request(app).get('/pedidos');
    expect(response.statusCode).toBe(200);
    expect(Array.isArray(response.body)).toBe(true);
  });

  test('POST /pedidos debe responder 400 si el usuario o producto no existe', async () => {
    const response = await request(app)
      .post('/pedidos')
      .send({ usuario_id: 9999, producto_id: 1, cantidad: 1 });

    expect(response.statusCode).toBe(400);
    expect(response.body.error).toBe('El usuario o producto indicado no existe');
  });
});
