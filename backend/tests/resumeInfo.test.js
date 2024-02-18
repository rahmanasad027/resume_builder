const request = require('supertest');
const app = require('../index');

describe('Get Endpoints', () => {
  it('should fetch combined resume data', async () => {
    const res = await request(app)
      .get('/resume-data') // Adjust the endpoint URL
      .set('Accept', 'application/json');

    expect(res.statusCode).toEqual(200); // Adjust the expected status code
    expect(res.body).toHaveProperty('professionalInfo'); // Adjust property name expectation
    expect(res.body).toHaveProperty('personalInfo'); // Adjust property name expectation
  });
});
