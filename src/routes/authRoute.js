var express = require('express')
var router = express.Router()
const authController = require('../controllers/auth')
const verifyTokenmiddleware = require('../middleware/verifyToken') 
require('dotenv').config()

router.post('/register', authController.register )

router.post('/login', authController.logIn)


router.post('/reset',authController.Reset)

router.post('/reset-password-done', authController.resestPasswordDone)

router.get('/check', authController.getCheck)

router.get('/users',authController.getAllUsers)

module.exports=router;