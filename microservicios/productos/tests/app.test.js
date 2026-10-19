const request = require('supertest');
const app = require('../src/app');
const pool = require('../src/db');

afterAll(async () => {
  await pool.end();
});

describe('Pruebas del Microservicio de Productos', () => {
  test('GET /health debe responder correctamente', async () => {
    const response = await request(app).get('/health');
    expect(response.statusCode).toBe(200);
    expect(response.body.servicio).toBe('productos');
  });

  test('GET /productos debe devolver una lista de productos', async () => {
    const response = await request(app).get('/productos');
    expect(response.statusCode).toBe(200);
    expect(Array.isArray(response.body)).toBe(true);
    expect(response.body.length).toBeGreaterThan(0);
  });

  test('GET /productos/:id debe devolver un producto existente', async () => {
    const response = await request(app).get('/productos/1');
    expect(response.statusCode).toBe(200);
    expect(response.body.id).toBe(1);
  });

  test('GET /productos/:id debe responder 404 para producto inexistente', async () => {
    const response = await request(app).get('/productos/9999');
    expect(response.statusCode).toBe(404);
  });
});
