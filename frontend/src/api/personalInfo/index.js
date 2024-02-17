import { apiCaller } from '../api-caller';
import { ENDPOINTS, REQUEST_TYPES } from '../constants';


// export const assignRiderAPI = data => apiCaller({
//   method: REQUEST_TYPES.POST,
//   url: ENDPOINTS.PERSONAL_INFO,
//   data,
// });

//  calling apiCaller and sending data through url and setting type to POST
export const personalInfoAPI = data => {
  console.log('Incoming data:', data); // Log incoming data to the console
  return apiCaller({
    method: REQUEST_TYPES.POST,
    url: ENDPOINTS.PERSONAL_INFO,
    data,
  });
};
