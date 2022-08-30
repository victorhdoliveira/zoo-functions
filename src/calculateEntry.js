const { prices } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function countEntrants(entrants) {
  const ageGroup = entrants.map((entrant) => entrant.age);
  const kid = ageGroup.filter((age) => age < 18).length;
  const youngAdult = ageGroup.filter((age) => age >= 18 && age < 50).length;
  const aged = ageGroup.filter((age) => age >= 50).length;
  return { child: kid, adult: youngAdult, senior: aged };
}

function payment(entrants) {
  return (Object.values(countEntrants(entrants))[0] * prices.child
  + Object.values(countEntrants(entrants))[1] * prices.adult
  + Object.values(countEntrants(entrants))[2] * prices.senior);
}

function calculateEntry(entrants) {
  if (entrants === undefined || Object.entries(entrants).length === 0) {
    return 0;
  }
  return payment(entrants);
}

module.exports = { calculateEntry, countEntrants };
