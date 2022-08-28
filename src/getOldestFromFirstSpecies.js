const { employees, species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function getOldestFromFirstSpecies(id) {
  const work = employees.find((employee) => employee.id === id);
  const animal = work.responsibleFor.find((firstAnimal) => firstAnimal);
  const animalAge = species.filter((specie) => specie.id === animal)
    .map((feature) => feature.residents).pop([]).sort((a, b) => b.age - a.age);
  return Object.values(animalAge[0]);
}

console.log(getOldestFromFirstSpecies('c5b83cb3-a451-49e2-ac45-ff3f54fbe7e1'));

module.exports = getOldestFromFirstSpecies;
