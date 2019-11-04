export const IMG_URL_PREFIX = '/static/images/clubs/';
export const API_PREFIX = (process.env.NODE_ENV === "production") ?
  ('http://myvrclub.ru/api') : ('http://localhost:3100');
  export const API_PREFIX_FRONT = (process.env.NODE_ENV === "production") ?
  ('http://myvrclub.ru') : ('http://localhost:3000');