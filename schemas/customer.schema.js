const Joi = require('joi');

const id = Joi.number().integer();
const name = Joi.string().min(3).max(15).messages({
  'string.base': `" nombre "debe ser un tipo de 'texto'`,
  'string.empty': `"nombre "no puede ser un campo vacío`,
  'string.min': `"nombre" debe tener una longitud mínima de {#limit}`,
  'string.max': `"nombre" debe tener una longitud máxima de {#limit}`
});
const lastName = Joi.string();
const phone = Joi.string();
const userId = Joi.number().integer();
const email = Joi.string().email();
const password = Joi.string().min(8);

const getCustomerSchema = Joi.object({
  id: id.required(),
});

const createCustomerSchema = Joi.object({
  name: name.required(),
  lastName: lastName.required(),
  phone: phone.required(),
  user: Joi.object({
    email: email.required(),
    password: password.required(),
  })
});

const updateCustomerSchema = Joi.object({
  name,
  lastName,
  phone,
  userId

});

module.exports = { getCustomerSchema, createCustomerSchema, updateCustomerSchema };
