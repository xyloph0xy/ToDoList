const express = require('express');
const router = express.Router()

const{
    getAllTag,
    getByIdTag,
    postTag,
    updateTag,
    deleteTag
}= require('../controller/tagsController')

router.get('/',getAllTag)
router.get('/:id',getByIdTag)
router.post('/',postTag)
router.patch('/:id',updateTag)
router.delete('/:id',deleteTag)

module.exports= router