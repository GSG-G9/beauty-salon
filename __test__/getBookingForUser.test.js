const request = require('supertest');
const cookie = require('cookie');
const app = require('../server/app');
const { runBuild } = require('../server/database/config/build');
const connection = require('../server/database/config/connection');

describe('GET api/v1/bookings', () => {
  beforeEach(() => runBuild());
  afterAll(async () => { await new Promise((resolve) => setTimeout(() => resolve(), 3000)); });
  afterAll(() => connection.end());

  let token;

  // eslint-disable-next-line jest/expect-expect
  test('Login user to utilize it\'s token in unprotected routes tests', async () => {
    const { header: { 'set-cookie': cookies } } = await request(app)
      .post('/api/v1/signin')
      .send({ email: 'noor@gmail.com', password: '123456789noor' });
    token = cookie.parse(cookies[0]).token;
  });

  test('Should return given user bookings when user has bookings', async () => {
    const userBookings = [
      {
        appointment_date: '2021-03-29',
        appointment_time: '12:00',
        id: 3,
        service_name: 'Classic Manicure',
      },
    ];
    const {
      body: { data, statusCode },
    } = await request(app)
      .get('/api/v1/booking')
      .set('Cookie', [`token=${token}`]);
    expect(statusCode).toBe(200);
    expect(data).toEqual(userBookings);
  });
});
