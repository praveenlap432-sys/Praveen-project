const express = require('express')
const router = express.Router()

const {createorder} = require('../controllers/Controller.js')
router.post('/post',createorder)
module.exports = router
