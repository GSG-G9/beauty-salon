const request = require('supertest');

const app = require('../server/app');
const { runBuild } = require('../server/database/config/build');
const connection = require('../server/database/config/connection');
const { addBook, checkAvailability } = require('../server/database/queries');

describe('Test addBook and checkAvailability queries and addBook route', () => {
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
      userId: 2,
      serviceId: 2,
      stylistId: 2,
      appointmentDate: '2030-03-28',
      appointmentTime: '12:00',
    };
    test('Expect to returning appointment_date, appointment_time', async () => {
      const { rowCount, rows } = await addBook({ ...bookingData });
      expect(rows[0]).toEqual({
        appointment_date: '2030-03-28',
        appointment_time: '12:00',
      });
      expect(rowCount).toBe(1);
    });
  });
  describe('Test addBook route in success case', () => {
    const successBookingData = {
      userId: 2,
      serviceId: 2,
      stylistId: 2,
      appointmentDate: '2030-03-28',
      appointmentTime: '12:00',
    };
    test('Expect to return object with status 201, and success message', async () => {
      const {
        body: { status, message },
      } = await request(app)
        .post('/api/v1/booking')
        .set({ 'Content-Type': 'application/json' })
        .send({ ...successBookingData });

      expect(status).toBe(201);
      expect(message).toBe('appointment has been added successfully');
    });
  });
  describe('Test addBook route in failure case', () => {
    const failedBookingData = {
      userId: 2,
      serviceId: 2,
      stylistId: 2,
      appointmentDate: '2021-03-28',
      appointmentTime: '12:00',
    };
    test('Expect to return object with status 400, and success message', async () => {
      const {
        body: { statusCode, errorMessage },
      } = await request(app)
        .post('/api/v1/booking')
        .set({ 'Content-Type': 'application/json' })
        .send({ ...failedBookingData });

      expect(statusCode).toBe(400);
      expect(errorMessage).toBe('chosen time in not available');
    });
  });
});
