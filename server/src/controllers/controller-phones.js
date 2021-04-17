// Model
const phonesModel = require('../models/phones');

const getPhones = (req, res) => {
  try {
    let result = phonesModel.findAll();
    res.status(200).json({
      status: 'ok',
      data: result,
    });
  } catch (error) {
    console.error(`getPhones error: ${error.message}`);
    res.status(500).json({
      status: 'error',
      message: error.message,
    });
  }
};

module.exports = {
  getPhones,
};
