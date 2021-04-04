const request = require('supertest');

const app = require('../server/app');
const { runBuild } = require('../server/database/config/build');
const connection = require('../server/database/config/connection');
const { getProfile } = require('../server/database/queries');

describe('Test getUser DB query and route', () => {
  let token;
  beforeEach(() => runBuild());
  afterAll(() => connection.end());
  afterAll(async () => {
    await new Promise((resolve) => setTimeout(() => resolve(), 3000));
  });

  test('should return user object', async () => {
    const userId = 5;
    const { rows } = await getProfile(userId);
    return expect(rows[0]).toEqual(
      expect.objectContaining({
        first_name: 'adham',
        last_name: 'Hai',
      }),
    );
  });

  test('Login', async () => {
    const res = await request(app).post('/api/v1/signin').send({
      email: 'adham@hi.com',
      password: '123456789',
    });

    const {
      headers: {
        'set-cookie': [resCookies],
      },
    } = res;
    // eslint-disable-next-line prefer-destructuring
    token = resCookies.split(';')[0].split('=')[1];
    return expect(res.body).toEqual({
      statusCode: 200,
      message: 'Login successfully',
    });
  });

  test('should return Object contains status code and data', async () => {
    const res = await request(app)
      .get('/api/v1/profile')
      .expect('Content-Type', /json/);

    const actual = res.body;
    const expected = { statusCode: 401, message: "you're unauthorized" };
    expect(actual).toEqual(expected);
  });

  test('Success Case', async () => {
    const res = await request(app)
      .get('/api/v1/profile')
      .set('Cookie', [`token=${token}`])
      .expect('Content-Type', /json/);
    const actual = res.body;
    const expected = {
      status: 200,
      data: {
        first_name: 'adham',
        last_name: 'Hai',
        email: 'adham@hi.com',
        country: null,
        city: null,
        address: null,
        mobile: null,
        alt_mobile: null,
      },
    };
    expect(actual).toEqual(expected);
  });
});
