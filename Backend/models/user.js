const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('user', {
    codigo: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    nombres: {
      type: DataTypes.STRING(70),
      allowNull: false
    },
    apellidos: {
      type: DataTypes.STRING(70),
      allowNull: true
    },
    email: {
      type: DataTypes.STRING(70),
      allowNull: false
    },
    rol: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    password: {
      type: DataTypes.STRING(70),
      allowNull: false
    },
    Programa_codigo_pro: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'programa',
        key: 'codigo_pro'
      }
    }
  }, {
    sequelize,
    tableName: 'user',
    timestamps: false,
    indexes: [
      {
        name: "fk_User_Programa1_idx",
        using: "BTREE",
        fields: [
          { name: "Programa_codigo_pro" },
        ]
      },
    ]
  });
};
