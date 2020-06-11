'use strict';
module.exports = (sequelize, DataTypes) => {
  const Leads = sequelize.define('Leads', {
    email: DataTypes.STRING
  }, {});
  Leads.associate = function(models) {
    // associations can be defined here
  };
  return Leads;
};
