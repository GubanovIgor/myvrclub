const express = require('express');
const router = express.Router();
const mailgun = require('mailgun-js');
const apiKey = 'key-d824b4c522fad888c5b7d0a8c0429915';
const DOMAIN = 'sandboxe4b5c16a333140abbdf6c84ffd74257e.mailgun.org';

router.get('/', (req, res) => {
  res.send('Hello world');
});

router.post('/send-mail', (req, res) => {
  const mg = mailgun({ apiKey: apiKey, domain: DOMAIN });
  const data = {
    from: `Mailgun <support@myvrclub.ru>`,
    to: 'adam22185515@gmail.com, YOU@YOUR_DOMAIN_NAME',
    subject: 'Уведомление об ошибке',
    text: `
    Name: ${req.body.name}
    Email: ${req.body.from}
    Link: ${req.body.url}
    Text: ${req.body.text}
    `,
  };
  mg.messages().send(data, function (error, body) {
  });

  res.send();
});

module.exports = router;
