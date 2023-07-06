const express = require('express')
const route = express.Router()

const controller = require('../controller/controller')

route.post('/api/electronics', controller.search_electronics)
route.post('/api/register', controller.register)
route.post('/api/login', controller.login)
module.exports = route