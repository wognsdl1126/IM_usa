/**
 * LoginController
 */
const pool = require('../../config/dbConfig');

class LoginController {
  constructor() {}

  async getLogin(req, res, next) {
    res.render('login', { title: 'Login' });
    // pool.getConnection((err, conn) => {
    //   if (err) throw err;
    //   const sql = 'SELECT * FROM tbMember';
    //   conn.query(sql, (err, row) => {
    //     if (err) throw err;
    //     req.loginData = row;
    //     if (row.length === 0) {
    //       next();
    //     } else {
    //       res.send(row);
    //     }
    //   });
    // });
  }

  async getLoginDetail(req, res, next) {
    console.log('Second Function');
    res.send(req.loginData);
  }
}

module.exports = LoginController;
