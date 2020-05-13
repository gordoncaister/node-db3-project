const db = require("../data/dbConfig")

module.exports = {
    find,
    findById, 
    findSteps,
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

function findSteps(scheme_id) {
    return db.select('steps.id','schemes.scheme_name','steps.step_number','steps.instructions' )
        .from('steps')
        .where({scheme_id})
        .orderBy('step_number')
        .join('schemes', 'schemes.id', '=', 'steps.scheme_id')
        
}

function add(scheme) {

}

function update(changes, id) {

}

function remove(id) {
}