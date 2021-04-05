const request = require('supertest');
const cookie = require('cookie');
const app = require('../server/app');
const { runBuild } = require('../server/database/config/build');
const connection = require('../server/database/config/connection');

describe('GET /api/v1/isAuth,', () => {
  beforeEach(() => runBuild());
  afterAll(async () => {
    await new Promise((resolve) => setTimeout(() => resolve(), 3000));
  });
  afterAll(() => connection.end());

  let token;

  test("login user to utilize it's token in unprotected routes tests", async () => {
    const {
      body,
      header: { 'set-cookie': cookies },
    } = await request(app)
      .post('/api/v1/signin')
      .send({ email: 'iman@gmail.com', password: '123456789emy' });
    token = cookie.parse(cookies[0]).token;
    expect(body.statusCode).toBe(200);
  });

  test('should return all user data', async () => {
    const {
      body: { data },
    } = await request(app)
      .get('/api/v1/isAuth')
      .set('Cookie', [`token=${token}`])
      .expect('Content-Type', /json/);
    expect(data).toEqual(
      expect.objectContaining({
        first_name: 'iman',
        last_name: 'sedky',
        email: 'iman@gmail.com',
      }),
    );
  });
});
