const skills = [
    {id: 100001, skill: 'HTML', acquired: true},
    {id: 100002, skill: 'CSS', acquired: true},
    {id: 100003, skill: 'JAVASCRIPT', acquired: true}
];

module.exports = {
    getAll
};

function getAll() {
    return skills;
}