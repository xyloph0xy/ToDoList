const models = require('../models');
const {ToDo, Rincian} = models

module.exports = {
    getAllRincian: async (req, res)=>{
        try {
            const {todoId} = req.body
            const getAll= await Rincian.findAll({
                where: {
                    todoId
                }
            })
            res.status(200).json({
                msg: "success",
                data: getAll
            })
        } catch (error) {
            console.log(error);
            res.status(500).json({
                msg: error.message
            })
        }

    },
    postRincian: async (req, res)=>{
        try {
            const {id} = req.params
            const{Deskripsi, Status} = req.body
            const data = await Rincian.create({
                todoId :id, Deskripsi, Status
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
    updateRincian: async (req, res)=>{
        try {
            const { id } = req.params;
            const {todoId,Deskripsi, Status} = req.body

            const cek = await Rincian.findOne({
                where: {
                  id: req.params.id,
                },
            })

            if(!cek) return res.json({
                msg: "id rincian tidak ditemukan"
            })
            
            await Rincian.update({todoId,Deskripsi, Status},{
              where: {
                id,
              },
            });
            res.status(200).json({
              msg:"success"
            });
          } catch (error) {
            res.status(500).json({ msg: error.message });
          }
    },
    deleteRincian: async (req, res)=>{
        try {
            const {id} = req.params
            await Rincian.destroy({
                where: {
                id,
                },
            });
            res.status(200).json({msg: "Success"})
        } catch (error) {
            res.status(500).json({msg: error.message})
        }
    }
}