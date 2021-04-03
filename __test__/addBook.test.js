const request = require('supertest');

const app = require('../server/app');
const { runBuild } = require('../server/database/config/build');
const connection = require('../server/database/config/connection');
const { addBook, checkAvailability } = require('../server/database/queries');

describe('Test addBook and checkAvailability queries and addBook route', () => {
  let token;

  beforeEach(() => runBuild());
  afterAll(() => connection.end());
  afterAll(async () => {
    await new Promise((resolve) => setTimeout(() => resolve(), 3000));
  });

  describe('Test checkAvailability DB query', () => {
    const availabilityData = {
      appointment_date: '2021-03-28',
      appointment_time: '12:00',
    };
    test('Expect to return object', async () => {
      const { rowCount } = await checkAvailability(
        availabilityData.appointmentDate,
        availabilityData.appointmentTime,
      );
      expect(rowCount).toBe(0);
    });
  });

  describe('Test addBook DB query', () => {
    const bookingData = {
      userId: 4,
      serviceId: 2,
      stylistId: 2,
      appointmentDate: '2040-03-28',
      appointmentTime: '12:00',
    };
    test('Expect to returning appointment_date, appointment_time', async () => {
      const { rowCount, rows } = await addBook({ ...bookingData });
      expect(rows[0]).toEqual({
        appointment_date: '2040-03-28',
        appointment_time: '12:00',
      });
      expect(rowCount).toBe(1);
    });
  });

  const successBookingData = {
    userId: 4,
    serviceId: 2,
    stylistId: 2,
    appointmentDate: '2030-03-28',
    appointmentTime: '12:00',
  };
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

  test('Expect to return object with status 201, and success message', async () => {
    const {
      body: { status, message },
    } = await request(app)
      .post('/api/v1/booking')
      .set('Cookie', [`token=${token}`])
      .set({ 'Content-Type': 'application/json' })
      .send({ ...successBookingData });

    expect(status).toBe(201);
    expect(message).toBe('appointment has been added successfully');
  });

  describe('Test addBook route in failure case', () => {
    const failedBookingData = {
      userId: 4,
      serviceId: 2,
      stylistId: 2,
      appointmentDate: '2021-03-30',
      appointmentTime: '10:00',
    };
    test('Expect to return object with status 400, and success message', async () => {
      const {
        body: { statusCode, message },
      } = await request(app)
        .post('/api/v1/booking')
        .set('Cookie', [`token=${token}`])
        .set({ 'Content-Type': 'application/json' })
        .send({ ...failedBookingData });
      expect(statusCode).toBe(400);
      expect(message).toBe('chosen time in not available');
    });
  });
});
