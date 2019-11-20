import axios from 'axios';

export default axios.create({
  baseURL: `https://mayaprojects.net/sudaudaya/wp/wp-json/onelife/v1/`//Rest API URL
});