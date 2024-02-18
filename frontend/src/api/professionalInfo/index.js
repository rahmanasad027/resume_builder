import { apiCaller } from '../api-caller';
import { ENDPOINTS, REQUEST_TYPES } from '../constants';

//  calling apiCaller and sending data through url and setting type to POST
export const professionalInfoAPI = data => {
  return apiCaller({
    method: REQUEST_TYPES.POST,
    url: ENDPOINTS.PROFESSIONAL_INFO,
    data,
  });
};
