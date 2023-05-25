module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('users', {
      id: {
        type: sequelize.DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      username: {
        type: sequelize.DataTypes.STRING,
        unique: true,
      },
      password: {
        type: sequelize.DataTypes.TEXT,
      },
      role: {
        type: sequelize.DataTypes.STRING,
      },
    }, {
      timeTamps: false,
    });
  },

  async down (queryInterface, Sequelize) {
     
  }
};
