'use strict';
module.exports = (sequelize, DataTypes) => {
  const Leads = sequelize.define('Leads', {
    id: DataTypes.INTEGER,
    createdAt: DataTypes.DATE,
    updatedAt: DataTypes.DATE,
    email: DataTypes.STRING
  }, {});
  Leads.associate = function(models) {
    // associations can be defined here
  };
  return Leads;
};
