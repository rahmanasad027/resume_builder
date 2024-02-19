//  Setting up all the constants like baseUrl and endpoints to be used.
export const BASE_URL = 'https://resume-builder1-dun.vercel.app';
export const ENDPOINTS = {
  PERSONAL_INFO: `${BASE_URL}/data`,
  PROFESSIONAL_INFO: `${BASE_URL}/professional-data`,
  GET_RESUME_INFO: `${BASE_URL}/resume-data`
};
export const REQUEST_TYPES = {
  GET: 'GET',
  POST: 'POST',
};
