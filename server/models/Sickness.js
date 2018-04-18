export default (sequelize, DataTypes) => {
  const Sicknesses = sequelize.define('Sicknesses', {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    sickness: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: {
          msg: 'sickness must not be empty'
        },
      },
    },
    symptoms: DataTypes.STRING,
    description: DataTypes.STRING,
    contracting: DataTypes.STRING,
    causes: DataTypes.STRING
  }, {});
  Sicknesses.associate = function(models) {
    
  };
  return Sicknesses;
};