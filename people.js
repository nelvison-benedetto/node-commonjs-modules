// const utilities = require('./utilities-modules.js');
// console.log(utilities.calcAge(2003));

const getnames = require('./names.js');
const gethobbies = require('./hobbies.js');

function getNamesHobbies(){
    return {firstname: getnames.getNames(),};
}