const express = require('express')
const route = express.Router()

const controller = require('../controller/controller')

route.post('/api/electronics', controller.search_electronics)

module.exports = route