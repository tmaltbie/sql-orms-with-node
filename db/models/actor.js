const Sequelize = require('sequelize');

module.exports = (sequelize) => {
  class Actor extends Sequelize.Model {}
  Actor.init({
    firstName: {
      type: Sequelize.STRING,
      allowNull: false,
      validate: {
        notNull: {
          msg: "Please enter a value for 'firstName'",
        },
        notEmpty: {
          msg: "Please provide a value for 'lastName'",
        },
      },
    },
    lastName: {
      type: Sequelize.STRING,
      allowNull: false,
      validate: {
        notNull: {
          msg: "Please provide a value for 'lastName'",
        },
        notEmpty: {
          msg: "Please provide a value for 'lastName'",
        },
      },
    },
  }, { sequelize });

  return Actor;
};

