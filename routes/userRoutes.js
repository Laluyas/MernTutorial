const express = require('express')

const {GetUser,CreateUser, GetAllUser, GetSingleUser, UpdateUser, DeleteUser} = require('../controller/userController')

const route = express.Router()

route.get('/', GetAllUser)

route.get('/:id', GetSingleUser)

route.post('/', CreateUser)

route.patch('/:id', UpdateUser)

route.delete('/:id', DeleteUser)

module.exports = route