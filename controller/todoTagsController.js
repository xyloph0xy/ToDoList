const models = require('../models');
const { Todo_Tags, ToDo, Tags} = models;

module.exports = {
    getAll: async (req, res)=>{
        try {
            const data= await Todo_Tags.findAll({
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
            const data = await Todo_Tags.findOne({
              where: {
                id,
              },
              include: [{ 
                model: ToDo, 
                attributes: ["judul"]
            }, { 
                model: Tags,
                attributes:["nama"]
         }],
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
            const {ToDoId, TagId} = req.body
            const data = await Todo_Tags.create({
                ToDoId, TagId
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
            const {id} = req.query
            const {TodoId, TagId} = req.body
            await Todo_Tags.update({TodoId, TagId},{
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
            await Todo_Tags.destroy({
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