const express = require('express');
const {check} = require('express-validator')
const api = express.Router();

const {
    sesion,
    registerUser,
  } = require("../../controllers/user/userControllers");
  
  api.post(
    "/login",
    [
      check("email", "El Correo electrónico es requerido").isEmail(),
      check("password", "La contraseña debe ser mínimo 8 caracteres").isLength({
        min: 8,
      }),
    ],
    sesion
  );
  
  api.post(
    "/register",
    [
      check("email", "El Correo electrónico es requerido").isEmail(),
      check("password", "La contraseña debe ser mínimo 8 caracteres").isLength({
        min: 8,
      }),
    ],
    registerUser
  );


module.exports = api;