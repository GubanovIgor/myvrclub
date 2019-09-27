const mailgun = require('mailgun-js');
const apiKey = 'key-d824b4c522fad888c5b7d0a8c0429915';
const DOMAIN = 'smslike.ru';

const mg = mailgun({ apiKey: apiKey, domain: DOMAIN });
const data = {
  from: 'myvrclub.ru <support@myvrclub.ru>',
  to: 'adam22185515@gmail.com, YOU@YOUR_DOMAIN_NAME',
  subject: 'Hello',
  text: 'Testing some Mailgun awesomness!',
};
mg.messages().send(data, function (error, body) {
  console.log(body);
});
