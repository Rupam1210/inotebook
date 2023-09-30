const express=require('express');
const router=express.Router();
const user =require('../model/user');
const { body, validationResult }= require('express-validator');
const bcrypt =require('bcryptjs');
const jwt = require('jsonwebtoken');

const JWT_SECRET='HARRyusbxj'
//create user using :POSRT"/api/auth/createuser"

router.post('/createuser',[
    body('name','Enter avalid name').isLength({min:3}),
    body('password','password must be at least 5 caracter').isLength({min:5}),
    body('email','Enter a valid email'). isEmail()

],async(req,res)=>{
    // console.log(req.body);
    // res.send("hello");
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    try{
    let User= await user.findOne({email:req.body.email});
    if(User){
        return res.status(400).json({error:"Sorry a user with this email already exists"})
    }
    const salt= await bcrypt.genSalt(10);
    const secpass = await bcrypt.hash(req.body.password,salt);

    //new user
    User =await user.create({
        name: req.body.name,
        password: secpass,
        email: req.body.email,
        })

        //.then(user => res.json(user))
    //     .catch(err=>{console.log(err)
    //     res.json({error:'Please the enter the unique email'})})
    const data={
        user:{
            id:user.id
        }
    }
    const authtoken=jwt.sign(data,JWT_SECRET);
    
    res.json(authtoken)
    }catch(error){
        console.error(error.message);
        res.status(500).send("some error occured");
    }
    
})
module.exports =router