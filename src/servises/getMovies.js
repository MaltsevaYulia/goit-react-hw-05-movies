import axios from "axios"

const API_KEY = '854bf457e823d26894ff8657add868b2'
axios.defaults.baseURL = 'https://api.themoviedb.org/3'

export const fetchMovies = (path) => {
  return axios(path, {
    params: {
      api_key: API_KEY,
      
    },
  });
};