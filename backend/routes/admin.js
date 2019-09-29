const express = require('express');
const router = express.Router();
const Admin = require('../models/admin');

router.post('/login', async (req, res) => {
    console.log('admin login attempt ')
    const admin = await Admin.findOne({login: req.body.login})
    console.log(req.body)
    if (admin) console.log(admin);
    res.send('ok')
})

module.exports = router;