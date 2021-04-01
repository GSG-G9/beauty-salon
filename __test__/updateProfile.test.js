const { runBuild } = require('../server/database/config/build');
const connection = require('../server/database/config/connection');
const { updateUserQuery } = require('../server/database/queries');

describe('updateProfile Tests', () => {
  beforeEach(() => runBuild());
  afterAll(() => connection.end());
  test('updateProfile query', async () => {
    const actual = 'loe';

    const { rows } = await updateUserQuery({
      firstName: 'loe',
      lastName: 'challo',
      mobile: 123456789,
      address: 'Gaza',
      userId: 5,
    });
    return expect(actual).toEqual(rows[0].first_name);
  });
});
