// Dependencies
const request = require('supertest');
const { app } = require('../../src/app');

const phonesMock = require('../../src/mocks/phones.json');

describe('This is an API of phone data', () => {
  it('should response the GET method /phones', async () => {
    const { statusCode, body } = await request(app).get('/phones');

    const expected = {
      status: 'ok',
      data: phonesMock,
    };

    expect(statusCode).toBe(200);
    expect(body.status).toBe(expected.status);
    expect(body.data).toEqual(expect.any(Array));

    expected.data.forEach((phone) => {
      // Overview
      expect(phone).toMatchObject({
        id: expect.any(String),
        photo: expect.any(String),
        shortDesc: expect.any(String),
        price: expect.any(Number),
        currency: expect.any(String),
        variants: expect.any(Array),
        specs: expect.any(Object),
      });

      // Telephone variants
      phone.variants.forEach((variant) => {
        expect(variant).toMatchObject({
          id: expect.any(Number),
          label: expect.any(String),
        });
      });

      // Specs
      expect(phone.specs).toMatchObject({
        processor: expect.any(String),
        megapixels: expect.any(Number),
        screenSize: expect.any(Number),
        battery: expect.any(Number),
        internalStorage: expect.any(Number),
        ram: expect.any(Number),
      });
    });
  });
});
