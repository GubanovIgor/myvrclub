const express = require('express');
const router = express.Router();
const Admin = require('../models/admin');
function sleepFor(sleepDuration) {
    let now = new Date().getTime();
    while (new Date().getTime() < now + sleepDuration) { /* do nothing */
    }
}
router.post('/login', async (req, res) => {
    const {login, password} = req.body;
    console.log('admin login attempt ')
    console.log('login', login);
    console.log('password', password);
    const admin = await Admin.findOne({login: login});
    console.log(admin)
    sleepFor(2000);
    if (admin && admin.password === password)
        res.json({message: admin.login, loginStatus: true});
    else res.json({message: 'wrong login or password', loginStatus: false});
});

module.exports = router;