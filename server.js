const express = require('express')
const mongoose = require('mongoose');
const User = require('./model/userModel');
const userRoutes = require('./routes/userRoutes');

const app = express();

app.use(express.json()) //Communicate in Json format

app.use('/api/users', userRoutes)

try{
    mongoose.connect('mongodb+srv://yazeed:5707538E@cluster0.11nyslj.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0')
    console.log("connected to DB")
}catch(error){
    console.log(error)
}

app.listen(4000, ()=>{
    console.log('Server is listening on port 4000')
})

