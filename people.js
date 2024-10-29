// const utilities = require('./utilities-modules.js');
// console.log(utilities.calcAge(2003));

const utinames = require('./names.js');
const utihobbies = require('./hobbies.js');

const names = utinames.getNames("John","Wick");
const hobbies = utihobbies.getHobbies("climbing","cycling","boxe");

function getNamesHobbies(){
    return {
        firstname: names.firstname,
        lastname: names.lastname,
        hobbies: hobbies.hobbies
    };
}

console.log(getNamesHobbies());