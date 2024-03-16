const express = require('express');
const router = express.Router()

const{
    getAll,
    getByIdTag,
    postTag,
    updateTag,
    deleteTag
}= require('../controller/todoTagsController')

router.get('/',getAll)
router.get('/:id',getByIdTag)
router.post('/',postTag)
router.patch('/',updateTag)
router.delete('/:id',deleteTag)

module.exports = router