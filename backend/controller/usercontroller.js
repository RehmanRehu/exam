const User = require('../model/model');
const jwt = require('jsonwebtoken')
 
const secretkey ="lock"

const generateToken = (id,role) => {
    return jwt.sign({ id: id, role: role }, secretkey, {
       expiresIn: '24h'
   
    })
}

exports.createUser= async(req,res) => {
    try{
    const { name, email, role, password } = req.body;
     const user = new User({
        name:name,
        email:email, 
        role:role,
        password:password
     })  

     await User.save();

    const token =generateToken(user_id, user.role)
 
    res.status(201).json({
        success:true,
        token:token,
        data:user
    })
 } catch (err) {
        res.status(500).json({
            success:false,
            message: err.message
        })
    }
}


exports.loginUser= async(req,res) => {
    try{
    
     const user = await User.findOne({ email: eamil })
     const token =generateToken(user_id, user.role)
 
    res.json({
        success:true,
        token:token,
        data:user
    })
 } catch (err) {
        res.status(500).json({
            success:false,
            message: err.message
        })
    }
}

exports.updateUserById= async(req,res) => {
    try{
    const user = await User.findByIdAndupdate(id, { name: name })
     
    res.status(200).json({
        success:true,
        token:token,
        data:user
    })
 } catch (err) {
        res.status(500).json({
            success:false,
            message: err.message
        })
    }
}

exports.softdeleteById= async(req,res) => {
    try{
    const user = await User.findById(id)
     
    user.isDeleted =true;
    user.save();

    res.status(200).json({
        success:true,
        token:token,
        data:user
    })
 } catch (err) {
        res.status(500).json({
            success:false,
            message: err.message
        })
    }
}
