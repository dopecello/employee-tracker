const db = require("../db/connection");
const cTable = require("console.table");

class Role {
    constructor (id, title, salary, dpt_id){
        this.id = id,
        this.title = title,
        this.salary = salary,
        this.dpt_id = dpt_id
    }
}

module.exports = Role;