const express = require('express');
const router = express.Router();
// require the Skill model
const skillController = require('../controllers/skills');

/* GET users listing. */
router.get('/', skillController.index);
router.get('/new', skillController.new);
router.get('/:id', skillController.show);
router.post('/', skillController.create);
router.delete('/:id', skillController.delete);

module.exports = router;
