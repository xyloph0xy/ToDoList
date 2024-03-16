const models = require('../models');
const {ToDo, User} = models

module.exports={
    getAllTodo: async (req, res) =>{
        try {
            const UserId = req.body.UserId
            const getAll= await ToDo.findAll({
                where: {
                    UserId: UserId
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
    getTodoById: async (req, res) => {
        try {
          const { id } = req.params;
          const data = await ToDo.findOne({
            where: {
              id,
            },
            include: [{ model: User }],
          });
          res.status(200).json({
            data,
          });
        } catch (error) {
          res.status(500).json({ msg: error.message });
        }
      },
    postTodo: async (req, res) =>{
       
        try {
            const {UserId, judul, deskripsi, status, Tenggat} = req.body
            const postTodo = await ToDo.create({
                UserId, 
                judul, 
                deskripsi, 
                status, 
                Tenggat
            })
            res.status(200).json({
                msg: "Success",
                data: postTodo
            })
        } catch (error) {
            res.status(500).json({
                msg: error.message
            })
        }
        
    },
    updateTodo: async (req, res)=> {
        try {
            const { id } = req.params;
            const {UserId, judul, deskripsi, status, Tenggat} = req.body

            const cek = await ToDo.findOne({
              where: {
                id: req.params.id,
              },
          })

          if(!cek) return res.json({
              msg: "id todo tidak ditemukan"
          })

            await ToDo.update({UserId, judul, deskripsi, status, Tenggat},{
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
    deleteTodo: async (req, res)=> {
        try {
            const {id} = req.params
            await ToDo.destroy({
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