/**
 * Visit API
 * 이부분은 라우터, Spring에서 컨트롤러 역할
 */

const express = require('express');
const router = express.Router();
const UserController = require('./UserController');
const User = new UserController();

router.get('/', User.getUser, User.getUserDetail);

module.exports = router;
