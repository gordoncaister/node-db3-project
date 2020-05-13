const db = require("../data/dbConfig")

module.exports = {
    find,
    findById, 
    add, 
    update, 
    remove
}

function find() {
    return db("schemes")
}

function findById(id) {
    return db("schemes").where({id}).first();
}

function add(scheme) {
    db("schemes").insert(scheme).then(scheme =>  scheme)
}

function update(changes, id) {
}

function remove(id) {
}