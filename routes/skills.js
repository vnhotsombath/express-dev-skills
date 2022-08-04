const express = require('express');
const router = express.Router();
const skillsController = require('../controllers/skills');

// require the Skill model
//router.get('/', skillsController.index);

/* GET users listing. */
router.get('/', skillsController.index);

module.exports = router;
