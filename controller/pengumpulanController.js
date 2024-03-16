const models = require('../models');
const {ToDo, Pengumpulan} = models

module.exports={
    getPengumpulanById: async(req, res)=>{
        try {
            const {id} = req.params
            const Data = await Pengumpulan.findOne({
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
    postPengumpulan: async(req, res)=>{
        try {
            const{todoId, nama, link, deskripsi} = req.body
            const data = await Pengumpulan.create({
                todoId, nama, link, deskripsi
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
    updatePengumpulan: async(req, res)=>{
        try {
            const { id } = req.params;
            const {todoId, nama, link, deskripsi} = req.body
            await Pengumpulan.update({todoId,nama, link, deskripsi},{
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
    deletePengumpulan: async(req, res)=>{
        try {
            const {id} = req.params
            await Pengumpulan.destroy({
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