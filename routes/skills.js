const express = require('express');
const router = express.Router();
const skillController = require('../controllers/skills');

// require the Skill model
//router.get('/', skillsController.index);

/* GET users listing. */
router.get('/', skillController.index);

module.exports = router;
