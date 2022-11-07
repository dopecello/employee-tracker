const db = require("../db/connection");
const cTable = require("console.table");

class Role {
  constructor(id, title, salary, dpt_id) {
    (this.id = id),
      (this.title = title),
      (this.salary = salary),
      (this.dpt_id = dpt_id);
  }
  getAll() {
    const sql = `SELECT * FROM emp_role`;
    return db
      .promise()
      .query(sql)
      .then(([rows]) => {
        return rows;
      });
  }
  addRole() {
    const sql = `INSERT INTO emp_role (title, salary, dpt_id)
    VALUES ("${this.title}", "${this.salary}", "${this.dpt_id}")`;
    return db.promise().query(sql);
  }
}

module.exports = Role;
