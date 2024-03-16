const express = require('express');
const router = express.Router()

const lampiranRouter = require('./lampiranRouter');
const rincianRouter = require('./rincianRouter');
const todoRouter = require('./todoRouter');
const pengumpulanRouter = require('./pengumpulanRouter');
const tagsRouter = require('./tagsRouter');
const authRouter = require('./authRouter');
const todoTagsRouter = require('./todotagsRouter');

router.use(authRouter)
router.use('/todo',todoRouter)
router.use('/lampiran',lampiranRouter)
router.use('/rincian',rincianRouter)
router.use('/tags',tagsRouter)
router.use('/pengumpulan',pengumpulanRouter)
router.use('/todotag',todoTagsRouter)


module.exports= router