const request = require('supertest');
const cookie = require('cookie');
const { runBuild } = require('../server/database/config/build');
const connection = require('../server/database/config/connection');
const { updateUserQuery } = require('../server/database/queries');
const app = require('../server/app');

describe('updateProfile Tests', () => {
  beforeEach(() => runBuild());
  afterAll(async () => {
    await new Promise((resolve) => setTimeout(() => resolve(), 3000));
  });
  afterAll(() => connection.end());

  let token;

  // eslint-disable-next-line jest/expect-expect
  test("Login user to utilize it's token in unprotected routes tests", async () => {
    const {
      header: { 'set-cookie': cookies },
    } = await request(app)
      .post('/api/v1/signin')
      .send({ email: 'noor@gmail.com', password: '123456789noor' });
    token = cookie.parse(cookies[0]).token;
  });

  test('Should successfully update user data', async () => {
    const dataToUpdate = {
      firstName: 'loe',
      lastName: 'challo',
      mobile: 123456789,
      address: 'Gaza',
    };
    const {
      body: { data, statusCode },
    } = await request(app)
      .patch('/api/v1/profile')
      .set('Cookie', [`token=${token}`])
      .send(dataToUpdate);
    expect(statusCode).toBe(200);
    expect(data).toMatchObject({
      id: 3,
      first_name: 'loe',
      last_name: 'challo',
      email: 'noor@gmail.com',
      country: null,
      city: null,
      address: 'Gaza',
      mobile: 123456789,
      alt_mobile: null,
    });
  });

  test('updateProfile query', async () => {
    const actual = 'loe';
    const { rows } = await updateUserQuery({
      firstName: 'loe',
      lastName: 'challo',
      mobile: 123456789,
      address: 'Gaza',
      userId: 5,
    });
    return expect(actual).toEqual(rows[0].first_name);
  });
});
