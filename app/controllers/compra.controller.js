const db = require("../models");
const Compra = db.compra;
const Persona = db.persona;
const Auto = db.auto;

exports.consulta=(req,res)=>
{

  
    try{
      Compra.findAll(
        {
        include: [{
          model: Persona,
          attributes: ['rut','nombre','apellido']
    
        },
        {
          model: Auto,
          attributes: ['patente']
        }
      ]
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

