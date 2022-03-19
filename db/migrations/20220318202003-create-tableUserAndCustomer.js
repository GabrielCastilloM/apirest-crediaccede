'use strict';

const {UserSchema, USER_TABLE} = require('./../models/user.model')
const {CustomerSchema, CUSTOMER_TABLE} = require('./../models/customer.model')

module.exports = {
  async up (queryInterface) {
    await queryInterface.createTable(USER_TABLE, UserSchema);
    await queryInterface.createTable(CUSTOMER_TABLE, CustomerSchema);
  },

  async down (queryInterface) {
    await queryInterface.dropTable(USER_TABLE);
    await queryInterface.dropTable(CUSTOMER_TABLE);
  }
};
