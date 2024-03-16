const express = require('express');
const router = express.Router()

const {
    getAllRincian,
    postRincian,
    updateRincian,
    deleteRincian
} = require("../controller/rincianController")

router.post('/:id',postRincian)
router.get('/',getAllRincian)
router.delete('/:id',deleteRincian)
router.patch('/:id',updateRincian)


module.exports= router