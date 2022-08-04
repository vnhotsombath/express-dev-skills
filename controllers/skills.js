const Skill = require('../models/skill');

function index(req, res, next) {
    res.render('skills/index.ejs', {
        skills: Skill.getAll()
    });
}

function show(req, res){
    console.log(req.params, '<-- req. params');
    res.render('skills/show.ejs', {
        skill: Skill.getOne(req.params.id)
    });
}

module.exports = {
    index,
    show,
    new: newSkill,
    create,
    delete: deleteSkill
}
