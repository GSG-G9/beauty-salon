const request = require('supertest');

const app = require('../server/app');
const { runBuild } = require('../server/database/config/build');
const connection = require('../server/database/config/connection');

describe('POST /api/v1/signin', () => {
  beforeEach(() => runBuild());
  afterAll(() => connection.end());
  test('router returns 400 if there is no password', async () => {
    const { statusCode } = await request(app)
      .post('/api/v1/signin')
      .send({ email: 'yatt@gmail.com', password: '' });
    return expect(statusCode).toBe(400);
  });

  test('router returns 400 if there is no email', async () => {
    const { statusCode } = await request(app)
      .post('/api/v1/signin')
      .send({ email: '', password: '123456789yas' });
    return expect(statusCode).toBe(400);
  });
  test('router returns 400 if password is incorrect', async () => {
    const {
      body: { message },
      statusCode,
    } = await request(app)
      .post('/api/v1/signin')
      .set({
        'Content-Type': 'application/json',
      })
      .send(
        JSON.stringify({ email: 'yatt@gmail.com', password: '1234567888yas' }),
      );
    expect(statusCode).toBe(400);
    return expect(message).toBe('Invalid username/password');
  });

  test('router returns 404 if email is incorrect', async () => {
    const { statusCode } = await request(app)
      .post('/api/v1/signin')
      .send({ email: 'yatdt@gmail.com', password: '123456789yas' });
    return expect(statusCode).toBe(404);
  });
});
