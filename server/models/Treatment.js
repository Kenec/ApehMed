export default (sequelize, DataTypes) => {
  const Treatments = sequelize.define('Treatments', {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    treatment: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: {
          msg: 'Treatment must not be empty'
        },
      },
    },
    sicknessId: DataTypes.INTEGER
  }, {});
  Treatments.associate = function(models) {
    Treatments.belongsTo(models.Sicknesses, { foreignKey: 'id', as: 'Sickness' });
  };
  return Treatments;
};