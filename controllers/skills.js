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

function newSkill(req, res) {
    res.render('skills/new.ejs')
}

function create(req, res) {
    console.log(req.body, '<-req.body')
    Skill.create(req.body);
    // when we change data, redirect
    res.redirect('/skills');
}

function deleteSkill(req, res) {
    Skill.deleteOne(req.params.id);
    res.redirect('/skills');
}

module.exports = {
    index,
    show,
    new: newSkill,
    create,
    delete: deleteSkill
}
