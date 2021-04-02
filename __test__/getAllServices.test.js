const request = require('supertest');
const app = require('../server/app');
const { runBuild } = require('../server/database/config/build');
const connection = require('../server/database/config/connection');
const { getServices } = require('../server/database/queries');

describe('test getServices query and /api/v1/services route', () => {
  beforeEach(() => runBuild());
  afterAll(async () => { await new Promise((resolve) => setTimeout(() => resolve(), 3000)); });
  afterAll(() => connection.end());

  test(`getServices query, expected the third service to be object with name 
    value equal Master WOMENS HAIRCUT`, async () => {
    const { rows } = await getServices();
    return expect(rows[3]).toEqual({
      id: 4,
      name: 'Master WOMENS HAIRCUT',
      category: 'Hair cuts',
    });
  });
  test('getServices query, expected the third service in DB to be', async () => {
    const { rowCount } = await getServices();
    return expect(rowCount).toBe(16);
  });

  test(`GET /api/v1/services, should return status 200 and an object with status
     200 and all the services`, async () => {
    const res = await request(app)
      .get('/api/v1/services')
      .expect('Content-Type', /json/)
      .expect(200);

    const expected = {
      status: 200,
      data: [
        {
          id: 1,
          name: 'JUNIOR WOMENS HAIRCUT',
          category: 'Hair cuts',
        },
        {
          id: 2,
          name: 'Childreen HAIRCUT',
          category: 'Hair cuts',
        },
        {
          id: 3,
          name: 'Mens HAIRCUT',
          category: 'Hair cuts',
        },
        {
          id: 4,
          name: 'Master WOMENS HAIRCUT',
          category: 'Hair cuts',
        },
        {
          id: 5,
          name: 'Classic Manicure',
          category: 'nails',
        },
        {
          id: 6,
          name: 'Dazzle Dry Vegan Manicure',
          category: 'nails',
        },
        {
          id: 7,
          name: 'Gel Manicure',
          category: 'nails',
        },
        {
          id: 8,
          name: 'Pedicure',
          category: 'nails',
        },
        {
          id: 9,
          name: 'Vitamin C Facial Brighten, Illuminate, Refresh ',
          category: 'Skin care',
        },
        {
          id: 10,
          name: 'Oxygen Facial Deep Cleanse, Clarifying',
          category: 'Skin care',
        },
        {
          id: 11,
          name: 'Ultimate Diamond Facial Lift, Firm, Anti-aging',
          category: 'Skin care',
        },
        {
          id: 12,
          name: 'Ultimate Diamond Facial Lift, Firm, Anti-aging',
          category: 'Skin care',
        },
        {
          id: 13,
          name: 'Wedding',
          category: 'Make up',
        },
        {
          id: 14,
          name: 'Simple',
          category: 'Make up',
        },
        {
          id: 15,
          name: 'Smokey',
          category: 'Make up',
        },
        {
          id: 16,
          name: 'gliter',
          category: 'Make up',
        },
      ],
    };
    const actual = res.body;
    return expect(actual).toEqual(expected);
  });
});
