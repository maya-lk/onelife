import axios from 'axios';

export default axios.create({
  baseURL: `http://udaya.com.au/wp/wp-json/onelife/v1/`//Rest API URL
});