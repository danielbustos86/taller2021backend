const db = require("../models");
const Auto = db.auto;
const Op = db.Sequelize.Op;

exports.create = (req, res) => {


  // Create a Tutorial
  const auto = {
    patente: req.body.patente,
    marca: req.body.marca,
    ano : req.body.ano
  };

  // Save Tutorial in the database
  Auto.create(auto)
    .then(data => {
      res.status(201).send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Error al registra persona."
      });
    });
};
