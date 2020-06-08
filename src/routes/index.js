/**
 *
 */

/** Routes */
//라우터 불러와서
const usersRouter = require('./users');
const loginRouter = require('./login');

const getRouter = (path, controller) => ({ path, controller });

//라우터 패스, 라우터 등록
const routes = [
  getRouter('/users', usersRouter),
  getRouter('/login', loginRouter),
  getRouter('/', (req, res) => {
    res.render('index', { title: '연습' });
  }),
];

module.exports = routes;
