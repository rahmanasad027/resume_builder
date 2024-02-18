const request = require("supertest");
const app = require("../index");

describe("Post Endpoints", () => {
  it("should create a new professional info dataset", async () => {
    const res = await request(app)
      .post("/professional-data") // Adjust the endpoint URL
      .send({
        degree: "BSCS",
        workExperiences: [
          {
            start: "2024-01-29T19:00:00.000Z",
            end: "2024-01-30T19:00:00.000Z",
            work: "cheetay",
          },
        ],
        cert: "certified node developer",
        skill: "react, node",
        project: "flight management system",
        linkedin: "linkedin.com",
        accomp: "learnt and implemented my knowledge",
      });

    expect(res.statusCode).toEqual(200); // Adjust the expected status code
    expect(res.body).toHaveProperty("receivedData"); // Adjust property name expectation
  });
});
