const express = require('express');
const router = express.Router();
// require the Skill model
const skillController = require('../controllers/skills');

/* GET users listing. */
router.get('/', skillController.index);
router.get('/', skillController.show);

module.exports = router;
