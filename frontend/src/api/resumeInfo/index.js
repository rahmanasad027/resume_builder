import { apiCaller } from '../api-caller';
import { ENDPOINTS, REQUEST_TYPES } from '../constants';

//  calling apiCaller and sending data through url and setting type to POST
export const fetchResumeInfoAPI = () => apiCaller({
    method: REQUEST_TYPES.GET,
    url: ENDPOINTS.GET_RESUME_INFO,
  });