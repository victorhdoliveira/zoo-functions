const { species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

const getAnimals = (loc) => species.filter((specie) => specie.location === loc)
  .map((animals) => animals.name);

const speciesbyLocation = {
  NE: getAnimals('NE'),
  NW: getAnimals('NW'),
  SE: getAnimals('SE'),
  SW: getAnimals('SW'),
};

const getAnimalByLocation = (loc) => species.filter((specie) => specie.location === loc)
  .map((animalName) => ({
    [animalName.name]: animalName.residents.map((namesList) => namesList.name),
  }));

const animalsNameByLocation = {
  NE: getAnimalByLocation('NE'),
  NW: getAnimalByLocation('NW'),
  SE: getAnimalByLocation('SE'),
  SW: getAnimalByLocation('SW'),
};

const getAnimalByLocationSorted = (loc) => species.filter((specie) => specie.location === loc)
  .map((animalName) => ({
    [animalName.name]: animalName.residents.map((namesList) => namesList.name).sort(),
  }));

const animalsNameByLocationSorted = {
  NE: getAnimalByLocationSorted('NE'),
  NW: getAnimalByLocationSorted('NW'),
  SE: getAnimalByLocationSorted('SE'),
  SW: getAnimalByLocationSorted('SW'),
};

const getAnimalSex = (loc, genre) =>
  species.filter((specie) => specie.location === loc)
    .map((animalName) => ({
      [animalName.name]: animalName.residents.filter((animalGenre) => animalGenre.sex === genre)
        .map((namesList) => namesList.name),
    }));

const animalsBySex = {
  NE: getAnimalSex('NE', 'female'),
  NW: getAnimalSex('NW', 'female'),
  SE: getAnimalSex('SE', 'female'),
  SW: getAnimalSex('SW', 'female'),
};

const getAnimalSexSorted = (loc, genre) =>
  species.filter((specie) => specie.location === loc)
    .map((animalName) => ({
      [animalName.name]: animalName.residents.filter((animalGenre) => animalGenre.sex === genre)
        .map((namesList) => namesList.name).sort(),
    }));

const animalsBySexSorted = {
  NE: getAnimalSexSorted('NE', 'female'),
  NW: getAnimalSexSorted('NW', 'female'),
  SE: getAnimalSexSorted('SE', 'female'),
  SW: getAnimalSexSorted('SW', 'female'),
};

const includeNamesAndSorted = (options) => {
  if (options === undefined) {
    return speciesbyLocation;
  }
  const { includeNames, sorted } = options;
  if (!includeNames) {
    return speciesbyLocation;
  }
  if (sorted) {
    return animalsNameByLocationSorted;
  } return animalsNameByLocation;
};

const sexAndSorted = (options) => {
  const { sex, sorted } = options;
  if (sex && sorted) {
    return animalsBySexSorted;
  } return animalsBySex;
};

function getAnimalMap(options) {
  if (options === undefined || !options.sex || !options.includeNames) {
    return includeNamesAndSorted(options);
  } return sexAndSorted(options);
}

module.exports = getAnimalMap;
