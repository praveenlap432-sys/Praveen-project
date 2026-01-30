const express = require('express')
const router = express.Router()

const {registerPost}=require('../controllers/RegisterController')
router.post('/regpost',registerPost)
module.exports = router
