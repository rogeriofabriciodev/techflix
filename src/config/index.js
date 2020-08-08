const URL_BE = window.location.hostname.includes('localhost')
  // ? 'http://localhost:5000'
  ? 'https://techflixserver.herokuapp.com'
  : 'https://techflixserver.herokuapp.com';

export default {
  URL_BE,
};