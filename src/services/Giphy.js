import axios from 'axios';

const { REACT_APP_GIPHY_API_KEY, REACT_APP_GIPHY_API_URL } = process.env;

const instance = axios.create({
  baseURL: REACT_APP_GIPHY_API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

class GiphyService {
  search(term) {
    return instance.get('/search', {
      params: {
        q: term,
        api_key: REACT_APP_GIPHY_API_KEY,
      },
    });
  }

  getById(id) {
    return instance.get({
      params: {
        gif_id: id,
        api_key: REACT_APP_GIPHY_API_KEY,
      },
    });
  }
}

export default new GiphyService();
