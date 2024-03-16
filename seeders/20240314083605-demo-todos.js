'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('ToDos', [
      {
      UserId: 2,
      judul: "123",
      deskripsi: "abc@gmail.com",
      status: 'doing',
      createdAt: new Date(),
      updatedAt: new Date(),
      Tenggat: new Date()
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
