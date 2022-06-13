const express = require('express');
const {check} = require('express-validator')
const api = express.Router();

const {
    createExcuse,
    getExcuse,
    deleteExcuse,
    updateFecha
  } = require("../../controllers/user/excusaController");
const {Chekauth} = require("../../middleware/Check")
  
  api.post(
    "/",
    Chekauth,
    createExcuse
  );
  api.get(
    "/:codigo",
    Chekauth,
    getExcuse
  );
  api.delete(
    "/:idexcusa",
    Chekauth,
    deleteExcuse
  )
  api.put(
    "/",
    Chekauth,
    updateFecha
    )
  
  module.exports = api;
