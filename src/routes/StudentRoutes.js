const router = require('express').Router();
const {StudentController} = require('../controllers/StudentController');

router.get('/', StudentController.handleRoot);

module.exports = router;