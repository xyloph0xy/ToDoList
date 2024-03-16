const models = require('../models');
const { User } = models;
const bcrypt = require('bcrypt');
const jwt= require('jsonwebtoken');
const { where } = require('sequelize');

module.exports={
    register: async (req,res)=>{
        let {username, password, email} = req.body

        const salt = await bcrypt.genSalt()
        const hashPass = await bcrypt.hash(password, salt)
        password = hashPass

        try {
            await User.create({ username, email, password });
            res.status(200).json({
                msg: "Register berhasil"
            })
        } catch (error) {
            console.log(error);
            res.status(500).json({
                msg: error.message
            })
        }
    },
    login: async (req,res)=>{
        try {
            
            const user = await User.findOne({
                where:{
                    username: req.body.username
                }
            })

            if (user === null) {
                res.status(404).json({ msg: 'User tidak ditemukan' });
              } 

            const match = await bcrypt.compareSync(req.body.password, user.password)
            if(!match){
                return res.status(400).json({
                    msg:"password salah"
                })
            }

            const id = user.id
            const username = user.username
            const email = user.email

            const accessToken = jwt.sign({id,username,email}, process.env.ACCESS_TOKEN_SECRET,{
                expiresIn: '2m'
            })

            if (user) {
                req.session.id= user.id
                res.json({
                  msg: 'success login',
                  accessToken,
                });
              } else {
                res.status(401).json({
                  msg: 'username or password are incorrect',
                });
              }

        } catch (error) {
            console.log(error);
            res.status(404).json({
                msg: error.message
            })
        }
    }
}