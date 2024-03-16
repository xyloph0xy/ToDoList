const express = require('express');
const router = express.Router()

const {
    getPengumpulanById,
    postPengumpulan,
    updatePengumpulan,
    deletePengumpulan
}= require("../controller/pengumpulanController")

router.post("/",postPengumpulan)
router.get("/:id",getPengumpulanById)
router.patch("/:id",updatePengumpulan)
router.delete("/:id", deletePengumpulan)

module.exports= router