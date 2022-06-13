const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('excusa', {
    idexcusa: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    grupo_doc: {
      type: DataTypes.STRING(70),
      allowNull: false
    },
    soporte_ex: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    asignatura: {
      type: DataTypes.STRING(70),
      allowNull: false
    },
    user_codigo: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'user',
        key: 'codigo'
      }
    },
    descripcion: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    estado: {
      type: DataTypes.STRING(75),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'excusa',
    timestamps: false,
    indexes: [
      {
        name: "fk_Excusa_User1_idx",
        using: "BTREE",
        fields: [
          { name: "User_codigo" },
        ]
      },
    ]
  });
};
