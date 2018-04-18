module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Sicknesses', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      sickness: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
          notEmpty: true
        }
      },
      symptoms: {
        type: Sequelize.STRING
      },
      description: {
        type: Sequelize.STRING
      },
      contracting: {
        type: Sequelize.STRING
      },
      causes: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Sicknesses');
  }
};