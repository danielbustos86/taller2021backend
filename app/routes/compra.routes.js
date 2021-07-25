module.exports = app => {
    const compra = require("../controllers/compra.controller.js");
  
    var router = require("express").Router();
  
    router.get("/",compra.consulta)

    app.use("/api/compra", router);
  };
  