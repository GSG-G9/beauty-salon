const request = require('supertest');
const cookie = require('cookie');
const app = require('../server/app');
const { runBuild } = require('../server/database/config/build');
const connection = require('../server/database/config/connection');

describe('test getUserData query and /api/v1/isAuth route', () => {
  beforeEach(() => runBuild());
  afterAll(async () => { await new Promise((resolve) => setTimeout(() => resolve(), 3000)); });
  afterAll(() => connection.end());

  let token;

  // eslint-disable-next-line jest/expect-expect
  test('login user to utilize it\'s token in unprotected routes tests', async () => {
    const { header: { 'set-cookie': cookies } } = await request(app)
      .post('/api/v1/signin')
      .send({ email: 'iman@gmail.com', password: '123456789emy' });
    token = cookie.parse(cookies[0]).token;
  });

  test('GET /api/v1/isAuth, should return all user data', async () => {
    const { body: { data } } = await request(app)
      .get('/api/v1/isAuth')
      .set('Cookie', [`token=${token}`])
      .expect('Content-Type', /json/);
    expect(data).toEqual(expect.objectContaining({
      first_name: 'iman',
      last_name: 'sedky',
      email: 'iman@gmail.com',
    }));
  });

  test('should return successfully logout with status 200 with message logged out successfully', async () => {
    const {
      statusCode,
      body: { message },
    } = await request(app)
      .post('/api/v1/logout')
      .set('Cookie', [`token=${token}`]);
    expect(statusCode).toBe(200);
    expect(message).toBe('logged out successfully');
  });
});
