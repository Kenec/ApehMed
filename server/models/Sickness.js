export default (sequelize, DataTypes) => {
  const Sickness = sequelize.define('Sickness', {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    sickness: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        isAlpha: {
          msg: 'sickness must be an valid string'
        },
        notEmpty: {
          msg: 'sickness must not be empty'
        },
      },
    },
    symptoms: DataTypes.STRING
  }, {});
  Sickness.associate = function(models) {
    // associations can be defined here
  };
  return Sickness;
};