const todoController = require('../controllers/todoController')

function routes(app) {
    app.get('/', todoController.getAllTodos)
    app.post('/', todoController.addTodo)
    app.put('/:id', todoController.editTodo)
    app.put('/update-status/:id', todoController.updateStatus)
    app.put('/delete-todo/:id', todoController.markDeleted)
    app.put('/add-tag/:id', todoController.addTag)
}

module.exports = routes