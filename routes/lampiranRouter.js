const express = require('express');
const router = express.Router()
const upload = require('../middleware/multer')
const{
    getAllByIdToDo,
    getById,
    postLampiran,
    deleteLampiran
} = require('../controller/lampiranController')

router.post("/",upload.uploadFile.single('alamatPath'), postLampiran)
router.get('/',getAllByIdToDo)
router.get('/:id',getById)
router.delete('/:id',deleteLampiran)

module.exports= router