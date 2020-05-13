const db = require("../data/dbConfig")

module.exports = {
    find,
    findById, 
    findSteps,
    add,
    addStep,
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
    return db("schemes").insert(scheme).then(ids => findById(ids[0]))
}

function addStep(step,scheme_id){
    return db("steps")
        .insert({...step, scheme_id:scheme_id})
        .then(ids => db("steps").where({id:ids[0]}))
}

function update(changes, id) {
    return db('schemes')
        .where({id})
        .update(changes)
        .then(id => {
            return findById(id)
        })
}

function remove(id) {
    return db('schemes')
        .where({id})
        .del()
}