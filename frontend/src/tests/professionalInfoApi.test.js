import { apiCaller } from "../api/api-caller";
import { professionalInfoAPI } from "../api/professionalInfo";

// Mock the apiCaller function
jest.mock("../api/api-caller", () => ({
  apiCaller: jest.fn(),
}));

describe("professionalInfoAPI", () => {
  afterEach(() => {
    jest.clearAllMocks(); // Clear mock calls after each test
  });

  it("should call apiCaller with correct parameters", () => {
    const data = {
        degree: "BCSC in Computer science",
        workExperiences: [{work: 'Maintained and Revamped a logistics dashboard for Cheetay Logistics, improving rider,order, and partner mart management.Engineered a modern architecture with Dependency Injection, enhancingmaintainability and scalability.Orchestrated Sahar white label website front-end development, prioritizing speed.', start:'2024-01-29T19:00:00.000Z', end: '2024-01-29T19:00:00.000Z'}],
        cert: "Certified NodeJs developer. Developed a portal for students to streamline scholarship applications, interviewprocesses, and manage scholarship allowances and fees.Tech Stack: Node, React, MongoDB, Vercel, Blockchain Integration.",
        skill: "Nodejs, Reactjs, MongoDB, AstroJs",
        project: "Successfully deployed Mono repo technique to enhance web deployment, which ledto a considerable decrease in deployment complexity as well as an improvement indevelopment efficiency and teamwork.Collaborated effectively with stakeholders such as UX designers, product owners,otherdevelopers, and CEO to understand and participate in effective strategies for theorganization to stand out",
        linkedin: "https://www.linkedin.com/in/asad-rahman-0468a617b/",
        accomp: "Successfully deployed Mono repo technique to enhance web deployment, which ledto a considerable decrease in deployment complexity as well as an improvement indevelopment efficiency and teamwork.Collaborated effectively with stakeholders such as UX designers, product owners,otherdevelopers, and CEO to understand and participate in effective strategies for theorganization to stand out",
      };

    // Call the personalInfoAPI function
    professionalInfoAPI(data);

    // Expect apiCaller to have been called with the correct parameters
    expect(apiCaller).toHaveBeenCalledWith({
      method: "POST",
      url: "http://localhost:4000/professional-data",
      data,
    });
  });
});
