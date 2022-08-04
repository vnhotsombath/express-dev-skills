const express = require('express');
const router = express.Router();
//const skillsController = require('../controllers/skills');

// require the Skill model
//router.get('/', skillsController.index);

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('Skills Route!');
});

module.exports = router;
