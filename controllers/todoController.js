const dbConnection = require("../services/dbService");
const {ObjectId} = require("mongodb");
const todoService = require('../services/todoService')
const jsonResponseService = require ('../services/jsonResponseService')

let todoController = {
    
    getAllTodos: async (req, res) => {
        let searchObj = {
            deleted: false
        }

        if(req.query.complete === 'true') {
            searchObj.complete = true
        }

        if(req.query.complete === 'false') {
            searchObj.complete = false
        }

        dbConnection(async (db)=>{
            let result = await todoService.getAllTodos(db, searchObj)
            res.json(jsonResponseService(result))
        })
    },
    
    addTodo: async (req, res) => {

        const todoToAdd = {
            todo: req.body.todo,
            complete: false,
            deleted: false
        }

        dbConnection(async (db)=> {
            let result = await todoService.addTodo(db, todoToAdd)
            if(result.acknowledged) {
                res.json(jsonResponseService(result))
            } else {
                res.json(jsonResponseService(result))
            }
        })
    },
    
    editTodo: (req, res) => {
        const id = ObjectId(req.params.id)
        todoToEdit = req.body.todo
        
        dbConnection(async (db) => {
            let result = await todoService.editTodo(db, id, todoToEdit)

            if(result.acknowledged) {
                res.json(jsonResponseService)
            } else {
                res.json(jsonResponseService)
            }
        })
    },

    updateStatus: (req, res) => {

        const id = ObjectId(req.params.id)
        status = req.body.complete

        dbConnection(async (db)=> {
            let result = await todoService.updateStatus(db, id, status)
            if(result.acknowledged) {
                res.json(jsonResponseService(result))
            } else {
                res.json(jsonResponseService(result))
            }
        })
    },
    
    markDeleted: (req, res) => {
        const id = ObjectId(req.params.id)

        dbConnection(async (db)=> {
            let result = await todoService.markDeleted(db, id)
            if(result.acknowledged) {
                res.json(jsonResponseService(result))
            } else {
                res.json(jsonResponseService(result))
            }
        })
    },
    
    addTag: (req, res) => {
        const id = ObjectId(req.params.id)
        tag = req.body.tag

        dbConnection (async (db) => {
            let result = await todoService.addTag(db, id, tag)
            if(result.acknowledged) {
                res.json(jsonResponseService(result))
            } else {
                res.json(jsonResponseService(result))
            }
        })
    }
}

module.exports = todoController