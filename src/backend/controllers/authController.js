const User = require('../models/User');
const jwt = require("jsonwebtoken");

//Generate JWT token

const generateToken = (id) => {
    return jwt.sign({id}, process.env.JWT_SECRET, {expiresIn: "1h"});
};

//Register User
exports.registerUser = async(req,res) => {
    const{fullName, email, password, profileImageUrl} = req.body;
    // Validation: Check for missing fields
    if (!fullName || !email || !password){
        return res.status(400).json ({message: "All fields are required"});
    }
    try{
        //Check if email already exists
        const existingUser = await User.findOne({email});
        if(existingUser){
            return res.status(400).json({message: "Email already in use"});
        }
        //Create the user
        const user = await User.create({
            fullName,
            email,
            password,
            profileImageUrl,
        });
        
        res.status(201).json({
            id:user._id,
            user,
            token: generateToken(user._id),
        });

    }catch(err){
        res.status(500).json({message: "Error registering user", error: err.message});
    }
};


//Login User
exports.loginUser = async(req,res) => {};


//Register User
exports.getUserInfo = async(req,res) => {};

