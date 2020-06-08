/**
 * Visit API
 *
 */

const express = require('express');
const router = express.Router();
const UserController = require('../users/UserController');
const LoginController = require('./LoginController');
const login = new LoginController();
const users = new UserController();

//만약 서비스에 들리지 않는다면 이런식으로 사용 가능
router.get('/', (req, res) => {
  res.render('login', { title: 'login' });
});

// 만약 서비스 후 렌더링할 시 이런식으로 사용가능
// 물론 선행 처리한 함수에서 데이터를 사용하려면 req객체에 저장해야 사용 가능, req.loginData = ?? 이런식으로 저장, 접근 해야됨
router.get('/', users.getUser, (req, res) => {
  res.render('index', { title: '11' });
});

router.post('/', login.getLogin, login.getLoginDetail);

module.exports = router;
