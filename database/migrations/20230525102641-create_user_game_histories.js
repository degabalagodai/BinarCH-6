module.exports = {
    async up (queryInterface, Sequelize) {
      await queryInterface.createTable('user_game_histories', {
        id: {
          type: Sequelize.DataTypes.INTEGER,
          primaryKey: true,
          autoIncrement: true,
        },
        user_id: {
          type: Sequelize.DataTypes.INTEGER,
          reference: {
            model: {
              tableName: 'users',
            },
            key: 'id'
          },
        },
        game_id: {
          type: Sequelize.DataTypes.INTEGER,
          reference: {
            model: {
              tableName: 'game',
            },
            key: 'id'
          },
        },
        score: {
          type: Sequelize.DataTypes.STRING,
        },
        played_at: {
          type: Sequelize.DataTypes.STRING,
        },
      }, {
        timeTamps:false,
      });
    },

  async down (queryInterface, Sequelize) {
      await queryInterface.dropTable('games');
  },
};
