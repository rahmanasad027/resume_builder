const request = require('supertest');
const app = require('../index');

describe('Post Endpoints', () => {
  it('should create a new post', async () => {
    const res = await request(app)
      .post('/data') // Adjust the endpoint URL
      .send({
        name: 'Asad Rahman',
        title: 'Software Developer',
        desc: 'Experienced software developer with a focus on web technologies.',
        contact: '+1234567890',
        email: 'john.doe@example.com',
        skills: 'JavaScript, React, Node.js, MongoDB',
        interests: 'Reading, hiking, photography'
      });

    expect(res.statusCode).toEqual(200); // Adjust the expected status code
    expect(res.body).toHaveProperty('receivedData'); // Adjust property name expectation
  });
});
