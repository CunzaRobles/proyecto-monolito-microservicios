const request = require('supertest');
const { app, pool } = require('../src/app');

describe('Pruebas de endpoints del Monolito', () => {
  afterAll(async () => {
    await pool.end();
  });

  test('GET /health debe retornar estado ok', async () => {
    const res = await request(app).get('/health');
    expect(res.statusCode).toBe(200);
    expect(res.body).toEqual({ estado: 'ok' });
  });

  test('GET /usuarios debe retornar una lista de usuarios', async () => {
    const res = await request(app).get('/usuarios');
    expect(res.statusCode).toBe(200);
    expect(Array.isArray(res.body)).toBe(true);
  });

  test('GET /productos debe retornar una lista de productos', async () => {
    const res = await request(app).get('/productos');
    expect(res.statusCode).toBe(200);
    expect(Array.isArray(res.body)).toBe(true);
  });

  test('GET /pedidos debe retornar una lista de pedidos', async () => {
    const res = await request(app).get('/pedidos');
    expect(res.statusCode).toBe(200);
    expect(Array.isArray(res.body)).toBe(true);
  });
});
