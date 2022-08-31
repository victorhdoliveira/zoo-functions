const data = require('../data/zoo_data');
const { hours, species } = require('../data/zoo_data');

const getHour = (day) => `Open from ${hours[day].open}am until ${hours[day].close}pm`;

const getExhibition = (day) => species.filter((specie) => specie.availability.includes(day))
  .map((animalsName) => animalsName.name);

const getAnimal = (animal) => species.filter((specie) => specie.name.includes(animal))
  .map((day) => day.availability).pop([]);

const animalsList = species.filter((specie) => specie).map((type) => type.name);

const openedDays = ['Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

const closedDay = ['Monday'];

const idealParameter = openedDays + animalsList + closedDay;

const closedDayInfo = {
  Monday: {
    officeHour: 'CLOSED',
    exhibition: 'The zoo will be closed!',
  },
};

function openedDaysInfo(day) {
  return {
    [day]: {
      officeHour: getHour(day),
      exhibition: getExhibition(day),
    },
  };
}

function daysOfWeek() {
  const schedule = {};
  openedDays.forEach((day) => {
    schedule[day] = {
      officeHour: `Open from ${hours[day].open}am until ${hours[day].close}pm`,
      exhibition: getExhibition(day),
    };
  });
  schedule.Monday = { officeHour: 'CLOSED', exhibition: 'The zoo will be closed!' };
  return schedule;
}

function getSchedule(scheduleTarget) {
  if (animalsList.includes(scheduleTarget)) {
    return getAnimal(scheduleTarget);
  }
  if (openedDays.includes(scheduleTarget)) {
    return openedDaysInfo(scheduleTarget);
  }
  if (scheduleTarget === 'Monday') {
    return closedDayInfo;
  }
  if (scheduleTarget !== idealParameter) {
    return daysOfWeek();
  }
}

module.exports = getSchedule;
