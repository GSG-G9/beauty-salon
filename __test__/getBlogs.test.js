const request = require('supertest');

const app = require('../server/app');
const { runBuild } = require('../server/database/config/build');
const connection = require('../server/database/config/connection');
const { getBlogs } = require('../server/database/queries');

describe('Test getBlogs DB queries and route', () => {
  beforeEach(() => runBuild());
  afterAll(async () => { await new Promise((resolve) => setTimeout(() => resolve(), 3000)); });
  afterAll(() => connection.end());

  test('Expect the query to return array of objects', async () => {
    const { rows } = await getBlogs();
    return expect(rows[0]).toEqual(
      expect.objectContaining({
        id: 1,
        name: 'why to Add Vitamin E to Your Skin (and Hair) Routine Now',
      }),
    );
  });

  test('Expect to return object with statusCode 200 and array of blogs objects', async () => {
    const res = await request(app)
      .get('/api/v1/blog')
      .expect('Content-Type', /json/)
      .expect(200);
    const expected = {
      status: 200,
      data: [
        {
          id: 1,
          name: 'why to Add Vitamin E to Your Skin (and Hair) Routine Now',
          description:
            'Next to flashier ingredients like retinol and vitamin C, vitamin E is something of an unsung hero. You’ve probably spotted it in at least one of your products, given that it’s one of the most widely used ingredients in beauty (it’s typically listed as “tocopherol” on ingredients lists), but you might not know it does far more than moisturize. From powering your other actives to working its wide-ranging benefits from the inside out, vitamin E does it all—and truly deserves a front-row spot in your skin care lineup. Below, six reasons why this hardworking ingredient is one of our favorite antioxidants (and should be yours, too).',
          image:
            'https://cdn.discordapp.com/attachments/778557600017940501/825477578386571274/woman-in-the-sun-feature.png',
          content: null,
        },
        {
          id: 2,
          name: 'Things You Didn’t Know About Facial Redness',
          description:
            'When it comes to your complexion, seeing red is not always a good thing—especially if you have sensitive skin that reacts from the slightest triggers. While facial redness is one of the most common skin issues to deal with, the whys and hows behind it are often a mystery. So here are some facts about redness to keep in mind the next time your skin is looking flushed.',
          image:
            'https://cdn.discordapp.com/attachments/778557600017940501/825478723259072562/2Q.png',
          content: null,
        },
        {
          id: 3,
          name: 'Face Cleansers That Work Great on Dry Skin',
          description:
            'Of course, dry skin is not a winter-only issue. In fact, dry skin is considered a skin type, and can be caused by genetics, conditions like eczema or psoriasis or simply because “some [people] make less oil to hydrate and seal the skin,” explains Dr. Papri Sarkar, a board-certified dermatologist in Boston. Skin also becomes drier as we age. “Older patients have drier skin because they have an impaired skin barrier layer, produce less oil and have decreased supporting tissues in their skin,” Dr. Sarkar says.',
          image:
            'https://cdn.discordapp.com/attachments/778557600017940501/825478504421785680/0220-Blog-Featured-FaceCleansers-V1.png',
          content: null,
        },
      ],
    };
    const actual = res.body;
    return expect(actual).toEqual(expected);
  });
});
