const express = require('express')
const registration = require('../../controller/registrationController')
const emailVerification = require('../../controller/emailVerification')
const loginController = require('../../controller/loginController')
const router = express.Router()



router.use('/registration',registration)
router.use('/emailVerification',emailVerification)
router.use('/login',loginController)

module.exports = router