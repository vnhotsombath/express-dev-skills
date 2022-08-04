const skills = [
    {id: 246803, skill: 'html', acquired: true},
    {id: 134524, skill: 'css', acquired: true},
    {id: 332423, skill: 'javascript', acquired: false},
    {id: 123212, skill: 'node', acquired: false},
    {id: 223232, skill: 'express', acquired: false}
];

  module.exports = {
	getAll,
	getOne,
    create,
    deleteOne
  };
  
  function getOne(id) {
	// Use the Array.prototype.find iterator method
	return skills.find(skill => skill.id === parseInt(id));
  }

  function getAll() {
	return skills;
  }

  function create(skill) {
    skill.id = Date.now() % 1000000;
    skill.acquired = false;
    skills.push(skill);
  }

  function deleteOne(id) {
    const idx = skills.findIndex(skill => skill.id === parseInt(id));
    skills.splide(idx, 1);
  }