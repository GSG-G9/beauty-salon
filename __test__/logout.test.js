// eslint-disable-next-line import/no-extraneous-dependencies
const request = require('supertest');
const app = require('../server/app');

describe('Test Post /logout', () => {
  let token;

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
