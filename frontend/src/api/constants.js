//  Setting up all the constants like baseUrl and endpoints to be used.
export const BASE_URL = 'http://localhost:4000';
export const ENDPOINTS = {
  PERSONAL_INFO: `${BASE_URL}/data`,
  PROFESSIONAL_INFO: `${BASE_URL}/professional-data`,
  GET_RESUME_INFO: `${BASE_URL}/resume-data`
};
export const REQUEST_TYPES = {
  GET: 'GET',
  POST: 'POST',
};
