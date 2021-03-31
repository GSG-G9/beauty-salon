const request = require('supertest');
const app = require('../server/app');
const { runBuild } = require('../server/database/config/build');
const connection = require('../server/database/config/connection');
const { bookingsQuery } = require('../server/database/queries');

describe('getBookingsByDate Tests', () => {
  beforeEach(() => runBuild());
  afterAll(() => connection.end());
  test('getBookingsByDate query', async () => {
    const expected = [
      {
        service: 'Ultimate Diamond Facial Lift, Firm, Anti-aging',
        stylist: 'jacob',
        appointment_date: '2021-03-30',
        appointment_time: '10:00',
      },
    ];
    const { rows } = await bookingsQuery('2021-03-30');
    return expect(expected).toEqual(rows);
  });

  test('GET /api/v1/bookings/:date', async () => {
    const expected = {
      statusCode: 200,
      message: 'success',
      data: [
        {
          service: 'Dazzle Dry Vegan Manicure',
          stylist: 'jacob',
          appointment_date: '2021-03-29',
          appointment_time: '11:00',
        },
        {
          service: 'Classic Manicure',
          stylist: 'jacob',
          appointment_date: '2021-03-29',
          appointment_time: '12:00',
        },
      ],
    };

    const res = await request(app)
      .get('/api/v1/bookings/2021-03-29')
      .expect('Content-Type', /json/)
      .expect(200);

    return expect(expected).toEqual(res.body);
  });
});
