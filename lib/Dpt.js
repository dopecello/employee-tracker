const db = require("../db/connection");
const cTable = require("console.table");

class Dpt {
    constructor (id, dpt_name){
        this.id = id,
        this.dpt_name = dpt_name
    }
}

module.exports = Dpt