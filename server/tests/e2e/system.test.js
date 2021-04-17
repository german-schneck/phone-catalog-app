// Dependencies
const request = require('supertest');
const { app } = require('../../src/app');

describe('Server running', () => {
  it('should response the GET method', async () => {
    const { statusCode } = await request(app).get('/');
    expect(statusCode).toBe(200);
  });
});
