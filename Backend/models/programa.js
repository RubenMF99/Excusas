const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('programa', {
    codigo_pro: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    nombre_pro: {
      type: DataTypes.STRING(70),
      allowNull: false
    },
    email_pro: {
      type: DataTypes.STRING(45),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'programa',
    timestamps: false
  });
};
