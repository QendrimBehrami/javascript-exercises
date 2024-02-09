/**
 *
 * @param {Array} people
 */
const findTheOldest = function (people) {
  let oldest = null;
  for (key in people) {
    let currentPerson = people[key];
    if (calculateAge(currentPerson) > calculateAge(oldest)) {
      oldest = currentPerson;
    }
  }

  return oldest;
};

function calculateAge(person) {
  if (person == null) {
    return -1; //xdd
  }
  let currentYear = new Date().getFullYear();
  let deathYear =
    person.yearOfDeath === undefined ? currentYear : person.yearOfDeath;
  return deathYear - person.yearOfBirth;
}

// Do not edit below this line
module.exports = findTheOldest;
