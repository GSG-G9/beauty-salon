const request = require('supertest');
const cookie = require('cookie');
const app = require('../server/app');
const { runBuild } = require('../server/database/config/build');
const connection = require('../server/database/config/connection');
const { deleteBooking } = require('../server/database/queries');

describe('test delete booking query and /api/v1/booking/:bookingId route', () => {
  beforeEach(() => runBuild());
  afterAll(async () => { await new Promise((resolve) => setTimeout(() => resolve(), 3000)); });
  afterAll(() => connection.end());

  test('deleteAppointments query', async () => {
    const { rows } = await deleteBooking(8, 8);
    const expected = [];
    return expect(expected).toEqual(rows);
  });

  let token;
  // eslint-disable-next-line jest/expect-expect
  test('login user to utilize it\'s token in unprotected routes tests', async () => {
    const { header: { 'set-cookie': cookies } } = await request(app)
      .post('/api/v1/signin')
      .send({ email: 'admin@gmail.com', password: '123456789' });
    token = cookie.parse(cookies[0]).token;
  });

  test('delete api/v1/booking/:bookingId route when there is no booking to delete', async () => {
    const ExpectedMessage = 'there is no booking ';
    const {
      body: { statusCode, message },
    } = await request(app)
      .delete('/api/v1/booking/6')
      .set('Cookie', [`token=${token}`])
      .expect('Content-Type', /json/);
    expect(statusCode).toBe(404);
    expect(message).toEqual(ExpectedMessage);
  });

  test('delete api/v1/booking/:bookingId route when there deleted successfully', async () => {
    const ExpectedMessage = 'Deleted successfully ';
    const {
      body: { status, message },
    } = await request(app)
      .delete('/api/v1/booking/4')
      .set('Cookie', [`token=${token}`])
      .expect('Content-Type', /json/);
    expect(status).toBe(200);
    expect(message).toEqual(ExpectedMessage);
  });
});
