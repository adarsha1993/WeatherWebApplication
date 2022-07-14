import axios from 'axios';

const KEY = '355a71a32aade21c15e8a277126d7594';

// 'https://api.openweathermap.org/data/2.5/weather?q=Sydney&appid=355a71a32aade21c15e8a277126d7594';

const URL = 'https://api.openweathermap.org/data/2.5';

export default axios.create({
  baseURL: URL,
  params: {
    appid: KEY,
  },
});
