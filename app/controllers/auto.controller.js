const db = require("../models");
const Auto = db.auto;
const Marca = db.marca;


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

exports.consulta=(req,res)=>
{

  
    try{
      Auto.findAll(
        {
        include: [{
          model: Marca,
          attributes: ['descripcion']
          // through: {
          //   attributes: ['descripcion'],
          //   where: {completed: true}
          // }
      
        }]
      }
      ).then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving personas."
        });
      });;
  
  
    }catch(error)
    {
      res.status(500).send(error)
    }
  
   
}

exports.consulta2=(req,res)=>
{

  
    try{
      Marca.findAll(
        {
        include: [{
          model: Auto,
          attributes: ['patente']
          // through: {
          //   attributes: ['descripcion'],
          //   where: {completed: true}
          // }
      
        }]
      }
      ).then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving personas."
        });
      });;
  
  
    }catch(error)
    {
      res.status(500).send(error)
    }
  
   
}

