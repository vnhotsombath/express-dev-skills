const skills = [
    {id: 246803, skill: 'html', acquired: true},
    {id: 134524, skill: 'css', acquired: true},
    {id: 332423, skill: 'javascript', acquired: false}
];

  module.exports = {
	getAll,
	getOne
  };
  
  function getOne(id) {
	// Use the Array.prototype.find iterator method
	return skills.find(skill => skill.id === parseInt(id));
  }
  function getAll() {
	return skills;
  }