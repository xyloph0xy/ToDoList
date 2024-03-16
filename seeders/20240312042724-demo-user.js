'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Users', [
      {
      username: 'John Doe',
      password: "123",
      email: "abc@gmail.com",
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      username: 'c',
      password: "123",
      email: "abc@gmail.com",
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      username: 'b',
      password: "123",
      email: "abc@gmail.com",
      createdAt: new Date(),
      updatedAt: new Date()
    }
  ], {});
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
