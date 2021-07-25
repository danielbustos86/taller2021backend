module.exports = (sequelize, Sequelize) => {
  const Marca = sequelize.define("marca", {
    descripcion: {
      type: Sequelize.STRING
    }
  });

  return Marca;
};
