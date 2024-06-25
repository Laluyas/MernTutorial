const mongoose = require('mongoose');

const Schema = mongoose.Schema

const userSchema = new Schema({
    email:{
        type: String,
        required: true
    },
    pass:{
        type: String,
        required: true
    }
})

const userModel = mongoose.model('Rahul', userSchema)

module.exports = userModel