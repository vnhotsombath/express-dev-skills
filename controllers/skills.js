const Skill = require('../models/skill');

function index(req, res, next) {
    res.send('Skills Route!');
}

module.exports = {
    index
};

