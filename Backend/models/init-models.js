var DataTypes = require("sequelize").DataTypes;
var _excusa = require("./excusa");
var _fecha = require("./fecha");
var _programa = require("./programa");
var _user = require("./user");

function initModels(sequelize) {
  var excusa = _excusa(sequelize, DataTypes);
  var fecha = _fecha(sequelize, DataTypes);
  var programa = _programa(sequelize, DataTypes);
  var user = _user(sequelize, DataTypes);

  fecha.belongsTo(excusa, { as: "Excusa_idExcusa_excusa", foreignKey: "Excusa_idExcusa"});
  excusa.hasOne(fecha, { as: "fecha", foreignKey: "Excusa_idExcusa"});
  user.belongsTo(programa, { as: "Programa_codigo_pro_programa", foreignKey: "Programa_codigo_pro"});
  programa.hasMany(user, { as: "users", foreignKey: "Programa_codigo_pro"});
  excusa.belongsTo(user, { as: "User_codigo_user", foreignKey: "User_codigo"});
  user.hasMany(excusa, { as: "excusas", foreignKey: "User_codigo"});

  return {
    excusa,
    fecha,
    programa,
    user,
  };
}
module.exports = initModels;
module.exports.initModels = initModels;
module.exports.default = initModels;
