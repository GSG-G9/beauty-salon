// eslint-disable-next-line import/no-extraneous-dependencies
const request = require('supertest');
const app = require('../server/app');
const { runBuild } = require('../server/database/config/build');
const connection = require('../server/database/config/connection');

describe('sign up routes tests', () => {
  beforeEach(() => runBuild());
  afterAll(async () => { await new Promise((resolve) => setTimeout(() => resolve(), 3000)); });
  afterAll(() => connection.end());
  const userData = {
    firstName: 'khamis',
    lastName: 'hesham',
    email: 'khamis@gmail.com',
    password: '123456',
  };

  test('check if email exist, status should be 409 and (user already exist) message', async () => {
    const {
      body: { message },
      statusCode,
    } = await request(app)
      .post('/api/v1/signup')
      .set({
        'Content-Type': 'application/json',
      })
      .send(JSON.stringify({ ...userData, email: 'yatt@gmail.com' }));
    expect(message).toBe('user already exists ');
    expect(statusCode).toBe(409);
  });

  test('check successful sign-up status should be 200 and (signed up successfully) message', async () => {
    const {
      body: { message },
      statusCode,
    } = await request(app)
      .post('/api/v1/signup')
      .set({
        'Content-Type': 'application/json',
      })
      .send({
        ...userData,
        email: 'khamis@gmail.com',
      });
    expect(statusCode).toBe(201);
    expect(message).toBe('SingUp Successfully');
  });
});
