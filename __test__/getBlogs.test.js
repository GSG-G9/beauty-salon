const request = require('supertest');

const app = require('../server/app');
const { runBuild } = require('../server/database/config/build');
const { connection } = require('../server/database/config/connection');
const { getBlogs } = require('../server/database/queries');

describe('Test getBlogs DB queries and route', () => {
  beforeEach(() => runBuild());
  afterAll(() => connection.end());
  describe('Test DB query', () => {
    test('Expect the query to return array of objects', async () => {
      const { rows } = await getBlogs();
      return expect(rows[0]).toEqual(
        expect.objectContaining({
          id: 1,
          name: 'why to Add Vitamin E to Your Skin (and Hair) Routine Now',
        }),
      );
    });
  });
});
