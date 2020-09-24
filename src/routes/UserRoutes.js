const router = require('express').Router();
const {UserController} = require('../controllers/UserController');

router.get('/', UserController.handleRoot);

module.exports = router;