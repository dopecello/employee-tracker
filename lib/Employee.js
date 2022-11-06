const db = require("../db/connection");
const cTable = require("console.table");

class Employee {
    constructor (id, first_name, last_name, role_id, mgr_id){
        this.id = id,
        this.first_name = first_name,
        this.last_name = last_name,
        this.role_id = role_id,
        this.mgr_id = mgr_id
    }
}

module.exports = Employee;