const {
  excusa: Excusa,
  fecha: Fecha
} = require("../../../models");
const { uploadSupport } = require("../../services/firebase");
const { getExcuseUser } = require("../../services/Excusas");
const { validationResult } = require("express-validator");

module.exports.createExcuse = async (req, res) => {
  const path = "gs://excusasunimag.appspot.com/soportes";
  try {
    const errores = validationResult(req);
    if (!errores.isEmpty()) {
      return res.status(400).json({ errores: errores.array() });
    }

    const {
      idexcusa,
      user_codigo,
      grupo_doc,
      asignatura,
      soporte_ex,
      fechacreacion,
      fecharespuesta,
      fechaexpiracion,
      descripcion,
      estado,
    } = req.body;
    const excuse = await Excusa.findOne({ where: { idexcusa } });
    if (excuse) {
      return res.status(403).json({ msg: "La excusa ya existe" });
    }
    const fechas = await Fecha.findOne({ where: {excusa_idexcusa:idexcusa } });
    if (fechas) {
      return res
        .status(403)
        .json({ msg: "Ya existe una fecha para la excusa" });
    }
    //soporte_ex = uploadSupport(soporte_ex, path);
    const excusa_idexcusa=idexcusa;
    const excusa_creada = await Excusa.create({
      idexcusa,
      user_codigo,
      grupo_doc,
      asignatura,
      soporte_ex,
      descripcion,
      estado
    });
    await Fecha.create({ excusa_idexcusa,fechacreacion, fecharespuesta, fechaexpiracion });
    return res.status(201).json(excusa_creada);
  } catch (error) {
    console.log(error);
  }
};

module.exports.getExcuse = async (req, res) => {
  console.log("Codigo: ",req.params);
  const codigo = req.params.codigo;
  try {
    const data = await getExcuseUser(codigo,req,res);
    res.status(200).json(data);
  } catch (error) {
    console.log(error);
    res.status(500).json({ msg: "Ha ocurrido un error." });
  }
};

module.exports.deleteExcuse = async (req, res) => {
  try {
    const idexcusa = req.params.idexcusa;
    const excuse = await Excusa.findOne({ where: { idexcusa } });
    const fechas = await Fecha.findOne({
      where: { excusa_idexcusa:idexcusa },
    });
    if (!excuse) {
      return res.status(404).json({ msg: "Excusa no encontrada." });
    }
    if (fechas) {
      await Fecha.destroy({ where: { excusa_idexcusa:idexcusa } });
    }
    await Excusa.destroy({ where: { idexcusa } });

    return res.status(200).json({ msg: "Excusa eliminada correctamente." });
  } catch (error) {
    console.log(error);
    res.status(500).json({ msg: "Ha ocurrido un error." });
  }
};

module.exports.updateFecha = async (req, res) => {
  const { idexcusa, fecharespuesta, fechaexpiracion } = req.body;

  try {
    const fecha = Fecha.findOne({ where: { excusa_idexcusa:idexcusa } });
    if (!fecha) {
      res.json({ msg: "No hay fechas definidas para la Excusa" });
    }
    if (
      req.user.rol !== "administrador" ||
      req.user.rol !== "Administrador"
    ) {
      return res.status(401).json({ msg: "No puedes realizar esta acción." });
    }

    await Fecha.update({ fecharespuesta, fechaexpiracion });
    return res.status(200).json({ msg: "Fecha actualizada." });
  } catch (error) {
    res.status(500).json({ msg: "Ha ocurrido un error." });
  }
};
