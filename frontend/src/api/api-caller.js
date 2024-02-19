import Axios from 'axios';
import { BASE_URL } from './constants';
import axios from 'axios';
//  api caller function to manage connections in RESTFUL manner. this is the last stage of our frontend application from where our data leaves our frontend application
axios.defaults.withCredentials = true;
export function apiCaller({ method = 'GET', url = '',  data = {}, contentType = 'application/json' } = {}) {
  return Axios({
    method,
    baseURL: BASE_URL,
    url,
    data,
    headers: {
      'Content-Type': contentType,
    },
    responseType: 'json',
    validateStatus: status => status >= 200 && status < 300,
  })
  .then(({ data: resp }) => resp)
  .catch(error => {
    throw error;
  });
}
