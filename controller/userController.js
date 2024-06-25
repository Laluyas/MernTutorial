const User = require('../model/userModel')

const GetSingleUser = async(req,res)=>{
    const {id} = req.params
    const user = await User.find({_id:id})
    res.status(200).json(user)
}

const GetAllUser = async(req,res)=>{
    const users = await User.find()
    res.status(200).json(users)
}

const CreateUser = async(req,res)=>{
    const {email, pass} = req.body
    const user = await User.create({email,pass});
    res.status(200).json("User created successfully")
}

const UpdateUser = async(req,res)=>{
    const {email, pass} = req.body
    const {id} = req.params
    const user = await User.findByIdAndUpdate(id, {email,pass});
    res.status(200).json("User updated successfully")
}

const DeleteUser = async(req,res)=>{
    const {id} = req.params
    const user = await User.findByIdAndDelete(id);
    res.status(200).json("User deleted successfully")
}

module.exports = {GetAllUser, CreateUser, GetSingleUser, UpdateUser, DeleteUser}