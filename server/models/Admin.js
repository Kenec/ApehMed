export default (sequelize, DataTypes) => {
  const Admins = sequelize.define('Admins', {
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        notEmpty: {
          msg: 'Email must not be empty'
        },
        isEmail: {
          msg: 'Not a valid email address!'
        }
      },
    },
    password: {
      allowNull: false,
      type: DataTypes.STRING,
      validate: {
        min: 10,
        notEmpty: {
          msg: 'password must not be empty'
        },
      },
    },
    role: {
      allowNull: false,
      type: DataTypes.INTEGER,
      validate: {
        max: 2,
        notEmpty: {
          msg: 'role must not be empty'
        },
      },
    },
    token: DataTypes.STRING,
  }, {});
  Admins.associate = function(models) {
    // associations can be defined here
  };
  return Admins;
};