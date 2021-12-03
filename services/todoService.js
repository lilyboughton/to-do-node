const todoService = {
    getAllTodos: async (db, searchObj)=>{
        const collection = db.collection('to-dos')
        const result = await collection.find(searchObj).toArray()
        return result
    },
    addTodo: async (db, todoToAdd) => {
        const collection = db.collection('to-dos')
        const result = await collection.insertOne(todoToAdd)
        return result
    },
    editTodo: async(db, id, todoToEdit) => {
        const collection = db.collection('to-dos')
        const result = await collection.updateOne({_id: id}, {$set: {todo: todoToEdit}})
        return result
    },
    updateStatus: async (db, id, status) => {
        const collection = db.collection('to-dos')
        const result = await collection.updateOne({_id: id}, {$set: {complete: status}})
        return result
    },
    markDeleted: async (db, id) => {
        const collection = db.collection('to-dos')
        const result = await collection.updateOne({_id: id}, {$set: {deleted: true}})
        return result
    },
    addTag: async (db, id, tag) => {
        const collection = db.collection('to-dos')
        const result = await collection.updateOne({_id: id}, {set: {tag: true}})
        return result
    }
}

module.exports = todoService