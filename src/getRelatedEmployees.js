const { employees } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function isManager(id) {
  return employees.filter((employee) => employee.id === id)
    .some((identify) => identify.id === '9e7d4524-363c-416a-8759-8aa7e50c0992'
    || identify.id === 'fdb2543b-5662-46a7-badc-93d960fdc0a8'
    || identify.id === '0e7b460e-acf4-4e17-bcb3-ee472265db83');
}

function getRelatedEmployees(managerId) {
}

console.log(getRelatedEmployees('9e7d4524-363c-416a-8759-8aa7e50c0992'));
module.exports = { isManager, getRelatedEmployees };
