const { species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function countAnimals(animal) {
  if (animal === undefined) {
    const AnimalsList = {};
    species.forEach((specie) => { AnimalsList[specie.name] = specie.residents.length; });
    return AnimalsList;
  }
  if (animal.sex === undefined) {
    return species.find((specie) => specie.name === animal.specie)
      .residents.length;
  }
  return species.find((specie) => specie.name === animal.specie)
    .residents.filter((genre) => genre.sex === animal.sex).length;
}

module.exports = countAnimals;
