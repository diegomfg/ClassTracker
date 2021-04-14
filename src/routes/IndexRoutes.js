const router = require('express').Router();
const { MainController } = require('../controllers/MainController')

router.get("/", MainController.handleIndex)

module.exports = router;
