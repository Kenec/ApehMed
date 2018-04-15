export default (sequelize, DataTypes) => {
  const Users = sequelize.define('Users', {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        isAlpha: {
          msg: 'Title must be an valid string'
        },
        notEmpty: {
          msg: 'Title must not be empty'
        },
      },
    },
    firstname: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        isAlpha: {
          msg: 'Firstname must be an valid string'
        },
        notEmpty: {
          msg: 'Firstname must not be empty'
        },
      },
    },
    lastname: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        isAlpha: {
          msg: 'Lastname must be an valid string'
        },
        notEmpty: {
          msg: 'Lastname must not be empty'
        },
      },
    },
    gender: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        isAlpha: {
          msg: 'Gender must be an valid string'
        },
        notEmpty: {
          msg: 'Gender must not be empty'
        },
      },
    },
    dob: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: {
          msg: 'Date of birth must not be empty'
        },
      },
    },
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
    phone: {
      allowNull: false,
      unique: true,
      type: DataTypes.REAL,
      validate: {
        not: ['[a-z]', 'i']
      }
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
    }
  }, {});
  
  Users.associate = (models) => {
    // associations can be defined here
  };
  return Users;
};