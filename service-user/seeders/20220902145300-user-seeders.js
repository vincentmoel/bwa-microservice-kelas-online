'use strict';
const bcrypt = require('bcrypt');

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('users', [
      {
        name: "Vincent",
        profession: "Web Dev",
        role: "admin",
        email: "vincent@gmail.com",
        password: await bcrypt.hash('q', 10),
        created_at : new Date(),
        updated_at : new Date()
      },
      {
        name: "Nathaniel",
        profession: "Web Dev",
        role: "admin",
        email: "nathaniel@gmail.com",
        password: await bcrypt.hash('q', 10),
        created_at : new Date(),
        updated_at : new Date()
      },
    ]);
  },

  async down (queryInterface, Sequelize) {

    await queryInterface.bulkDelete('users', null, {});
  }
};
