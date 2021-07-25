module.exports = app => {
    const auto = require("../controllers/auto.controller.js");
  
    var router = require("express").Router();
  

    router.post("/", auto.create);

    router.get("/consulta",auto.consulta)
    router.get("/consulta2",auto.consulta2)
    app.use("/api/auto", router);
  };
  