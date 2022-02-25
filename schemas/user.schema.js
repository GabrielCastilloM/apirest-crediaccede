const Joi = require('joi');

const id = Joi.number().integer();
const name = Joi.string().min(3).max(15).messages({
  'string.base': `" nombre "debe ser un tipo de 'texto'`,
  'string.empty': `"nombre "no puede ser un campo vacío`,
  'string.min': `"nombre" debe tener una longitud mínima de {#limit}`,
  'string.max': `"nombre" debe tener una longitud máxima de {#limit}`
});
const price = Joi.number().integer().min(10);

const createUserSchema = Joi.object({
  id: id.required(),
  name: name.required(),
  price: price.required(),
});

const updateUserSchema = Joi.object({
  name: name,
  price: price,
});

const getUserSchema = Joi.object({
  id: id.required(),
});

module.exports ={createUserSchema, updateUserSchema, getUserSchema}


