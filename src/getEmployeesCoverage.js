const { employees, species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function getSpecies(id) {
  const animalsName = [];
  const animals = employees.find((employee) => employee.id === id).responsibleFor;
  animals.forEach((animal) => {
    animalsName.push(species.find((specie) => specie.id === animal).name);
  });
  return animalsName;
}

function getLocations(id) {
  const animalsLocation = [];
  const animals = employees.find((employee) => employee.id === id).responsibleFor;
  animals.forEach((animal) => {
    animalsLocation.push(species.find((specie) => specie.id === animal).location);
  });
  return animalsLocation;
}

function emptyParameters() {
  return employees.map((element) => ({
    id: element.id,
    fullName: `${element.firstName} ${element.lastName}`,
    species: getSpecies(element.id),
    locations: getLocations(element.id),
  }));
}

function employeeInfo(obj) {
  const info = employees.filter((employee) => employee.id === obj.id
  || employee.firstName === obj.name || employee.lastName === obj.name);
  if (info.length === 0) {
    throw new Error('Informações inválidas');
  }
  const finalobj = {
    id: info[0].id,
    fullName: `${info[0].firstName} ${info[0].lastName}`,
    species: getSpecies(info[0].id),
    locations: getLocations(info[0].id),
  };
  return finalobj;
}

function getEmployeesCoverage(obj) {
  if (obj === undefined) {
    return emptyParameters();
  }
  return employeeInfo(obj);
}

module.exports = getEmployeesCoverage;
