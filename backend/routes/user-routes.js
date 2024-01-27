const express = require('express')
const router= express.Router()
const user=require("../controller/user-controller")
const validator = require("../validator/user-validator")
const User=require('../models/user-model')

router.post("/users",async(req,res) =>{
    const {username,email,password}=req.body;
    try{
        const userInfo = await User.create(
            {
                username,
                email,
                password
            }
        )
        res.json(userInfo)
    }catch(error){
        res.status(422).json(error)
    }
})



module.exports =router