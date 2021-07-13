module.exports = (sequelize, Sequelize) => {
  const Persona = sequelize.define("persona", {
    nombre: {
      type: Sequelize.STRING
    },
    apellido: {
      type: Sequelize.STRING
    },
    rut: {
      type: Sequelize.STRING
    }
  });

  return Persona;
};
