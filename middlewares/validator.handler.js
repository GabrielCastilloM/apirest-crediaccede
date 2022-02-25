const boom = require('@hapi/boom');

function validatorHandler (schema, property) {
  return (req, res, next) => {
    const data = req[property];
    const {error} = schema.validate(data, {abortEarly: false});//abortEarly lo utilizamos para enviar todos los errores de una vez
    if (error) {
      next(boom.badRequest(error));
    }
    next()
  }
}

module.exports = validatorHandler;

