export default (sequelize, DataTypes) => {
  const Symptoms = sequelize.define('Symptoms', {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    symptoms: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        isAlpha: {
          msg: 'Symptoms must be an valid string'
        },
        notEmpty: {
          msg: 'Symptoms must not be empty'
        },
      },
    }
  }, {});
  Symptoms.associate = function(models) {
    // associations can be defined here
  };
  return Symptoms;
};