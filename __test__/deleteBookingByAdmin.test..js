const request = require('supertest');
const cookie = require('cookie');
const app = require('../server/app');
const { runBuild } = require('../server/database/config/build');
const connection = require('../server/database/config/connection');
const { deleteBookingByAdmin } = require('../server/database/queries');

describe('test delete booking by admin', () => {
  beforeEach(() => runBuild());
  afterAll(async () => {
    await new Promise((resolve) => setTimeout(() => resolve(), 3000));
  });
  afterAll(() => connection.end());

  let token;

  // eslint-disable-next-line jest/expect-expect
  test("login user to utilize it's token in unprotected routes tests", async () => {
    const {
      header: { 'set-cookie': cookies },
    } = await request(app)
      .post('/api/v1/signin')
      .send({ email: 'admin@gmail.com', password: '123456789' });
    token = cookie.parse(cookies[0]).token;
  });

  test('GET /api/v1/admin/booking/:bookingId, should return successful delete message when found appointment', async () => {
    const {
      body: { statusCode, message },
    } = await request(app)
      .delete('/api/v1/admin/booking/2')
      .set('Cookie', [`token=${token}`])
      .expect('Content-Type', /json/);

    expect(statusCode).toBe(200);
    expect(message).toBe('deleted successfully');
  });

  test('GET /api/v1/admin/booking/:bookingId, should return fail delete message when appointment not found', async () => {
    const {
      body: { statusCode, message },
    } = await request(app)
      .delete('/api/v1/admin/booking/7')
      .set('Cookie', [`token=${token}`])
      .expect('Content-Type', /json/);

    expect(statusCode).toBe(400);
    expect(message).toBe("there's no appointment to delete");
  });

  test('Should delete item from the dataBase', async () => {
    const { rows } = await deleteBookingByAdmin(1);
    expect(rows[0]).toEqual({
      appointment_date: '2021-03-30', appointment_time: '10:00', id: 1, service_id: 11, stylist_id: 3, user_id: 1,
    });
  });

  test('Should not  delete item from the dataBase when item is deleted', async () => {
    await deleteBookingByAdmin(1);
    const { rowCount } = await deleteBookingByAdmin(1);
    expect(rowCount).toEqual(0);
  });
});
