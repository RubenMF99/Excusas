const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('fecha', {
    excusa_idexcusa: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'excusa',
        key: 'idexcusa'
      }
    },
    fechacreacion: {
      type: DataTypes.DATEONLY,
      allowNull: false
    },
    fecharespuesta: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    fechaexpiracion: {
      type: DataTypes.DATEONLY,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'fecha',
    timestamps: false,
    indexes: [
      {
        name: "fk_Fecha_Excusa1_idx",
        using: "BTREE",
        fields: [
          { name: "Excusa_idExcusa" },
        ]
      },
    ]
  });
};
