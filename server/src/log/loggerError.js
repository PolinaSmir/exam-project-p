const fs = require('fs');
const path = require('path');
const fsPromises = require('fs').promises;

const logFilePath = path.join(__dirname, 'errortest.log');

const logError = async (err) => {
  // console.log(err);
  // const errorMessage = `{message: "${err.message}", time: ${timestamp}, code: ${err.code}, stackTrace: {${err.stack}}\n`;
  const errorData = {
    message: err.message,
    time: Date.now(),
    code: error.code || 500,
    stackTrace: err.stack || {},
  };
  try {
    await fsPromises.appendFile(logFilePath, JSON.stringify(errorData));
  } catch (error) {
    console.error(error);
  }
};

module.exports = logError;
