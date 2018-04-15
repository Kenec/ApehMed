module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Users', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      title: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
          notEmpty: true
        }
      },
      firstname: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
          notEmpty: true
        }
      },
      lastname: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
          notEmpty: true
        }
      },
      gender: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
          notEmpty: true
        }
      },
      dob: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
          notEmpty: true
        }
      },
      email: {
        type: Sequelize.STRING,
        unique: true,
        allowNull: false,
        validate: {
          notEmpty: true,
          isEmail: true
        }
      },
      phone: {
        type: Sequelize.REAL,
        allowNull: false,
        validate: {
          notEmpty: true,
          not: ['[a-z]', 'i']
        }
      },
      password: {
        allowNull: false,
        type: Sequelize.STRING,
        validate: {
          notEmpty: true
        }
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
  down: (queryInterface, Sequelize) => queryInterface.dropTable('Users')

};