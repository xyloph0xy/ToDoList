const models = require('../models');
const {Tags} = models

module.exports = {
    getAllTag: async (req, res)=>{
        try {
            const data= await Tags.findAll({
            })
            res.status(200).json({
                msg: "success",
                data
            })
        } catch (error) {
            console.log(error);
            res.status(500).json({
                msg: error.message
            })
        }
    },
    getByIdTag: async (req, res)=>{
        try {
            const { id } = req.params;
            const data = await Tags.findOne({
              where: {
                id,
              },
            });
            res.status(200).json({
              data,
            });
          } catch (error) {
            res.status(500).json({ msg: error.message });
          }
    },
    postTag: async (req, res)=>{
        try {
            const {nama} = req.body
            const data = await Tags.create({
                nama
            })
            res.status(200).json({
                msg: "Success",
                data
            })
        } catch (error) {
            res.status(500).json({
                msg: error.message
            })
        }
    },
    updateTag: async (req, res)=>{
        try {
            const {id} = req.params
            const {nama} = req.body
            await Tags.update({nama},{
                where:{
                    id
                }
            })
            res.status(200).json({
                msg: "Success",
            })
        } catch (error) {
            res.status(500).json({
                msg: error.message
            })
        }
    },
    deleteTag: async (req, res)=>{
        try {
            const {id} = req.params
            await Tags.destroy({
                where:{
                    id,
                }
            })
            res.status(200).json({
                msg: "Success",
            })
        } catch (error) {
            res.status(500).json({
                msg: error.message
            })
        }
    }
}