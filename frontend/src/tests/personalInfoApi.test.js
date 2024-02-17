import { personalInfoAPI } from '../api/personalInfo'; 
import { apiCaller } from '../api/api-caller'; 

// Mock the apiCaller function
jest.mock('../api/api-caller', () => ({
  apiCaller: jest.fn(),
}));

describe('personalInfoAPI', () => {
  afterEach(() => {
    jest.clearAllMocks(); // Clear mock calls after each test
  });

  it('should call apiCaller with correct parameters', () => {
    const data = { contact
        : 
        "0316-0149145",
        desc
        : 
        "asad",
        email
        : 
        "drsaadis12@gmail.com",
        interests
        : 
        "playing, tabletennis, ",
        name
        : 
        "avatar",
        skills
        : 
        "i am a good developer",
        title
        : 
        "asad" };

    // Call the personalInfoAPI function
    personalInfoAPI(data);

    // Expect apiCaller to have been called with the correct parameters
    expect(apiCaller).toHaveBeenCalledWith({
      method: 'POST', 
      url: 'http://localhost:3010/data', 
      data,
    });
  });
});
