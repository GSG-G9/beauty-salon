// eslint-disable-next-line import/no-extraneous-dependencies
const request = require('supertest');
const cookie = require('cookie');
const app = require('../server/app');

describe('Test Post /logout', () => {
  let token;
  // eslint-disable-next-line jest/expect-expect
  test('login user to utilize it\'s token in unprotected routes tests', async () => {
    const { header: { 'set-cookie': cookies } } = await request(app)
      .post('/api/v1/signin')
      .send({ email: 'admin@gmail.com', password: '123456789' });
    token = cookie.parse(cookies[0]).token;
  });
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
