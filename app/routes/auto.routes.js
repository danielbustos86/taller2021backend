module.exports = app => {
    const auto = require("../controllers/auto.controller.js");
  
    var router = require("express").Router();
  

    router.post("/", auto.create);

    app.use("/api/auto", router);
  };
  