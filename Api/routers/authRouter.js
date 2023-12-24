const authController = require('../controllers/authController');

const router = require('express').Router();



router.post('/signup',authController.signUp)

module.exports = router