import axios from 'axios';

export const AxiosList =
{
  loginAxios: axios.create({
    baseURL: 'http://localhost:8080',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    }
  }),

  normalAxios: axios.create({
    baseURL: 'http://localhost:8080',
    headers: {
      'Content-Type': 'application/json',
    }
  }),

  authAxios: axios.create({
    baseURL: 'http://localhost:8080',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': JSON.parse(localStorage.getItem('token'))
    }
  })

};

export default AxiosList