const models = require('../models');
const {Lampiran} = models

module.exports={
    getAllByIdToDo: async (req, res) =>{
        try {
            const Data = await Lampiran.findAll({
                where: {
                    todoId : req.query.todoId
                }
            })
            res.status(200).json({
                msg: "success",
                data: Data
            })
        } catch (error) {
            console.log(error);
            res.status(500).json({
                msg: error.message
            })
        }
    },
    getById: async (req, res) =>{
        try {
            const {id} = req.params
            const Data = await Lampiran.findOne({
                where: {
                    id
                }
            })
            res.status(200).json({
                msg: "success",
                data: Data
            })
        } catch (error) {
            console.log(error);
            res.status(500).json({
                msg: error.message
            })
        }
    },
    postLampiran: async (req, res) =>{
        try {
            const path = 'lampiran/'+req.file.originalname
            const {todoId }= req.body
            const data = await Lampiran.create({
                alamatPath: path, todoId
            })
            res.status(200).json({
                msg: "Success",
                data
            })
            console.log(req.file);
            
        } catch (error) {
            res.status(500).json({
                msg: error.message
            })
        }
    },
    deleteLampiran: async (req, res) =>{
        try {
            const {id} = req.params
            await Lampiran.destroy({
                where: {
                id,
                },
            });
            res.status(200).json({msg: "Success"})
        } catch (error) {
            res.status(500).json({msg: error.message})
        }
    },
}
