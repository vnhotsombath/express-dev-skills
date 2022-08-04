const express = require('express');
const router = express.Router();
// require the Skill model
const skillController = require('../controllers/skills');

/* GET users listing. */
router.get('/', skillController.index);
router.get('/', skillController.new);
router.get('/', skillController.show);
router.post('/', skillController.create);
router.delete('/:id', skillController.delete);

module.exports = router;
