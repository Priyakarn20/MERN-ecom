const express = require('express');
const addUser = require('../controller/signup.cont.js');
const router = express.Router();

router.post('/signup', addUser);

module.exports = router;