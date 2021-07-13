const db = require("../models");
const Persona = db.persona;
const Op = db.Sequelize.Op;

exports.create = (req, res) => {


  // Create a Tutorial
  const persona = {
    nombre: req.body.nombre,
    apellido: req.body.apellido,
    rut : req.body.rut
  };

  // Save Tutorial in the database
  Persona.create(persona)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Error al registra persona."
      });
    });
};


  exports.findAll = (req, res) => {

    Persona.findAll()
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving personas."
        });
      });
  };


  exports.update = (req, res) => {
    const id = req.params.id;

    Persona.update(req.body, {
      where: { id: id }
    })
      .then(num => {
        if (num == 1) {
          res.send({
            message: "Persona was updated successfully."
          });
        } else {
          res.send({
            message: `Cannot update persona with id=${id}. Maybe Persona was not found or req.body is empty!`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Error updating Tutorial with id=" + id
        });
      });
  };

  exports.delete = (req, res) => {
    const id = req.params.id;

    Persona.destroy({
      where: { id: id }
    })
      .then(num => {
        if (num == 1) {
          res.send({
            message: "Persona was deleted successfully!"
          });
        } else {
          res.send({
            message: `Cannot delete Persona with id=${id}. Maybe Tutorial was not found!`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Could not delete Usuario with id=" + id
        });
      });
  };
