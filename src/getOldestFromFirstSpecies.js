const { employees, species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function getOldestFromFirstSpecies(id) {
  const work = employees.find((employee) => employee.id === id);
  const animal = work.responsibleFor.find((firstAnimal) => firstAnimal);
  const animalAge = species.filter((specie) => specie.id === animal)
    .map((feature) => feature.residents).pop([]).sort((a, b) => b.age - a.age);
  return Object.values(animalAge[0]);
}

module.exports = getOldestFromFirstSpecies;
