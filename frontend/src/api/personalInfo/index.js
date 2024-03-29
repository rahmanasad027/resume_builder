import { apiCaller } from '../api-caller';
import { ENDPOINTS, REQUEST_TYPES } from '../constants';

//  calling apiCaller and sending data through url and setting type to POST
export const personalInfoAPI = data => {
  return apiCaller({
    method: REQUEST_TYPES.POST,
    url: ENDPOINTS.PERSONAL_INFO,
    data,
  });
};
