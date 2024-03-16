const express = require('express');
const router = express.Router()
const verifyToken = require('../middleware/verifyToken')

const {
    getAllTodo,
    getTodoById,
    postTodo,
    updateTodo,
    deleteTodo
} = require('../controller/todoController')

router.post('/',postTodo)
router.get('/',verifyToken,getAllTodo)
router.get('/:id',getTodoById)
router.patch('/:id',updateTodo)
router.delete('/:id',deleteTodo)

module.exports= router