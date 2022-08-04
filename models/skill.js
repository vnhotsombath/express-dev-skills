const skills = [
    {id: 125223, skill: 'html', done: true},
    {id: 127904, skill: 'css', done: true},
    {id: 139608, skill: 'javascript', done:false}
];

module.exports = {
    getAll
};

function getAll() {
    return skills;
}