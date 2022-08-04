const Skill = require('../models/skill')

function index(req, res, next) {
    res.render('skills/index.ejs', {
        skills: Skill.getAll()
    });
}


module.exports = {
    index
};

