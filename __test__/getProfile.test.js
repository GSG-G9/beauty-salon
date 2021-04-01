const request = require('supertest');
const app = require('../server/app');
const { runBuild } = require('../server/database/config/build');
const connection = require('../server/database/config/connection');
const { getProfile } = require('../server/database/queries');

describe('Test getUser DB query and route', () => {
  beforeEach(() => runBuild());
  afterAll(() => connection.end());
  afterAll(async () => {
    await new Promise((resolve) => setTimeout(() => resolve(), 3000));
  });
  test('should return user object', async () => {
    const userId = 4;
    const { rows } = await getProfile(userId);
    return expect(rows[0]).toEqual(
      expect.objectContaining({
        first_name: 'adham',
        last_name: 'Hai',
      }),
    );
  });
  test('should return Object contains status code and data', async () => {
    const res = await request(app)
      .get('/api/v1/profile')
      .expect('Content-Type', /json/);

    const actual = res.body;
    const expected = { statusCode: 401, message: "you're unauthorized" };
    expect(actual).toEqual(
      expect.objectContaining(expected),
    );
  });
});
