'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
    
    await queryInterface.bulkInsert('Airports', [
      {
        name: 'Kempegowda International Airport',
        city_Id: 21,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Mengaluru Airport',
        city_Id: 21,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Mysore Airport',
        city_Id: 21,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Indira International Airport',
        city_Id: 34,
        createdAt: new Date(),
        updatedAt: new Date(),
      }
    ], {})
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
