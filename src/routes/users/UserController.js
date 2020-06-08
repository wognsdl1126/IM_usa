/**
 * UserController
 * 이부분은 컨트롤러, Spring에서 서비스 역할
 */
const pool = require('../../config/dbConfig');

class UserController {
  constructor() {}

  async getUser(req, res, next) {
    pool.getConnection((err, conn) => {
      if (err) throw err;
      const sql = 'SELECT * FROM tbMember';
      conn.query(sql, (err, row) => {
        if (err) throw err;
        req.userData = row;
        if (row.length === 0) {
          next();
        } else {
          res.send(row);
        }
      });
    });
  }

  async getUserDetail(req, res, next) {
    console.log('Second Function');
    res.send(req.userData);
  }
}

module.exports = UserController;
