// Mocks
const phonesMock = require('../mocks/phones.json');

const findAll = () => {
  try {
    return phonesMock;
  } catch (error) {
    console.error(`find phones error: ${error.message}`);
    throw new Error(error.message);
  }
};

module.exports = {
  findAll,
};
