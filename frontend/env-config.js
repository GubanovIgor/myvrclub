// production or development
const prod = process.env.NODE_ENV === 'development';

module.exports = {
  'process.env.API_URL': !prod ? 'https://myvrclub.ru' : 'http://localhost:3100',
};
