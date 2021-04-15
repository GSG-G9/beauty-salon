const request = require('supertest');
const app = require('../server/app');
const { runBuild } = require('../server/database/config/build');
const connection = require('../server/database/config/connection');

describe('Test routes', () => {
  beforeEach(() => runBuild());
  afterAll(() => connection.end());
  afterAll(async () => {
    await new Promise((resolve) => setTimeout(() => resolve(), 3000));
  });

  test('POST /api/v1/contact-us, should return status 200 and successful message when user send correct data', async () => {
    const {
      body: { status, message },
    } = await request(app).post('/api/v1/contact-us').send({
      username: 'iman',
      message: 'hi, i want to reserve in you salon',
      mobile: '1235455',
      email: 'iman@gmail.com',
    });

    expect(status).toBe(200);
    expect(message).toBe('message sent successfully');
  });

  test('POST /api/v1/contact-us, should return status 400 and validation message when user send invalid data', async () => {
    const {
      body: { statusCode, message },
    } = await request(app).post('/api/v1/contact-us').send({
      name: 'iman',
      message: 33,
      mobile: '1235455',
      email: 'iman@gmail.com',
    });

    expect(statusCode).toBe(400);
    expect(message).toBe('"message" must be a string');
  });
});
