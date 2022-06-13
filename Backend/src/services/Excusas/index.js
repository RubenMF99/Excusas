const { sequelize} = require("../../../models")

module.exports.getExcuseUser = (codigo) => {
    return new Promise(async (resolve, reject) => {
      try {
        const excuses = await sequelize.query(
          `SELECT * FROM excusa INNER JOIN fecha ON excusa.idexcusa = fecha.excusa_idexcusa
          WHERE user_codigo = ${codigo}`,
          { type: sequelize.QueryTypes.SELECT }
        );
  
        resolve(excuses);
      } catch (error) {
        reject(error);
      }
    });
  };
  