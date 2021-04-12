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
    value equal Master WOMEN HAIRCUT`, async () => {
    const { rows } = await getServices();
    return expect(rows[3]).toEqual({
      id: 4,
      name: 'Master WOMEN HAIRCUT',
      category: 'Hair cuts',
      description: 'haircut will begin with a complete consultation for a personalized cut',
      image: 'https://www.matrix.com/~/media/images/hair-color-gallery/hair-color-looks/highlights/brown-highlights/brown-highlights-1.jpg',
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
      data:
       [{
         id: 1,
         name: 'JUNIOR WOMEN HAIRCUT',
         category: 'Hair cuts',
         description:
            'haircut will begin with a complete consultation for a personalized cut',
         image:
            'https://www.matrix.com/~/media/images/hair-color-gallery/hair-color-looks/highlights/brown-highlights/brown-highlights-1.jpg',
       },
       {
         id: 2,
         name: 'Childreen HAIRCUT',
         category: 'Hair cuts',
         description:
            'haircut will begin with a complete consultation for a personalized cut',
         image:
            'https://www.matrix.com/~/media/images/hair-color-gallery/hair-color-looks/highlights/brown-highlights/brown-highlights-1.jpg',
       },
       {
         id: 3,
         name: 'Mens HAIRCUT',
         category: 'Hair cuts',
         description:
            'haircut will begin with a complete consultation for a personalized cut',
         image:
            'https://www.matrix.com/~/media/images/hair-color-gallery/hair-color-looks/highlights/brown-highlights/brown-highlights-1.jpg',
       },
       {
         id: 4,
         name: 'Master WOMEN HAIRCUT',
         category: 'Hair cuts',
         description:
            'haircut will begin with a complete consultation for a personalized cut',
         image:
            'https://www.matrix.com/~/media/images/hair-color-gallery/hair-color-looks/highlights/brown-highlights/brown-highlights-1.jpg',
       },
       {
         id: 5,
         name: 'Classic Manicure',
         category: 'nails',
         description:
            'nail lacquer invites you to flaunt a most sophisticated holiday manicure',
         image:
            'https://www.almarasimsalon.com/ressources/images/710362c84343.jpg',
       },
       {
         id: 6,
         name: 'Dazzle Dry Vegan Manicure',
         category: 'nails',
         description:
            'nail lacquer invites you to flaunt a most sophisticated holiday manicure',
         image:
            'https://www.almarasimsalon.com/ressources/images/710362c84343.jpg',
       },
       {
         id: 7,
         name: 'Gel Manicure',
         category: 'nails',
         description:
            'nail lacquer invites you to flaunt a most sophisticated holiday manicure',
         image:
            'https://www.almarasimsalon.com/ressources/images/710362c84343.jpg',
       },
       {
         id: 8,
         name: 'Pedicure',
         category: 'nails',
         description:
            'nail lacquer invites you to flaunt a most sophisticated holiday manicure',
         image:
            'https://www.almarasimsalon.com/ressources/images/d4a4860763ef.jpg',
       },
       {
         id: 9,
         name: 'Vitamin C Facial Brighten, Illuminate, Refresh ',
         category: 'Skin care',
         description:
            'Treatment revitalizes the eye contour,targeting puffiness,dark circles',
         image:
            'https://media.istockphoto.com/photos/happy-girl-applying-facial-cleanser-mask-young-woman-having-skin-care-picture-id1218410013',
       },
       {
         id: 10,
         name: 'Oxygen Facial Deep Cleanse, Clarifying',
         category: 'Skin care',
         description:
            'Treatment revitalizes the eye contour,targeting puffiness,dark circles',
         image:
            'https://media.istockphoto.com/photos/happy-girl-applying-facial-cleanser-mask-young-woman-having-skin-care-picture-id1218410013',
       },
       {
         id: 11,
         name: 'Ultimate Diamond Facial Lift, Firm, Anti-aging',
         category: 'Skin care',
         description:
            'Treatment revitalizes the eye contour,targeting puffiness,dark circles',
         image:
            'https://media.istockphoto.com/photos/happy-girl-applying-facial-cleanser-mask-young-woman-having-skin-care-picture-id1218410013',
       },
       {
         id: 12,
         name: 'Ultimate Diamond Facial Lift, Firm, Anti-aging',
         category: 'Skin care',
         description:
            'Treatment revitalizes the eye contour,targeting puffiness,dark circles',
         image:
            'https://media.istockphoto.com/photos/happy-girl-applying-facial-cleanser-mask-young-woman-having-skin-care-picture-id1218410013',
       },
       {
         id: 13,
         name: 'Wedding',
         category: 'Make up',
         description:
            'help you find the perfect look to encompass your unique personality',
         image:
            'https://www.almarasimsalon.com/ressources/images/5bb5a556bb25.jpg',
       },
       {
         id: 14,
         name: 'Simple',
         category: 'Make up',
         description:
            'help you find the perfect look to encompass your unique personality',
         image:
            'https://www.almarasimsalon.com/ressources/images/5bb5a556bb25.jpg',
       },
       {
         id: 15,
         name: 'Smokey',
         category: 'Make up',
         description:
            'help you find the perfect look to encompass your unique personality',
         image:
            'https://www.almarasimsalon.com/ressources/images/5bb5a556bb25.jpg',
       },
       {
         id: 16,
         name: 'gliter',
         category: 'Make up',
         description:
            'help you find the perfect look to encompass your unique personality',
         image:
            'https://www.almarasimsalon.com/ressources/images/5bb5a556bb25.jpg',
       }],
    };
    const actual = res.body;
    return expect(actual).toEqual(expected);
  });
});
