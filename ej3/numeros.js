const Logger = require("logplease");
const logger = Logger.create("utils");

exports.esPar = (num) => {
  if (num % 2 == 0) {
    logger.info(`El número es par`);
    return true;
  } else {
    logger.warn(`El número no es par`);
    return false;
  }
};
