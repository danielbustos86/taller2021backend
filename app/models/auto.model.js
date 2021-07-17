module.exports = (sequelize, Sequelize) => {
  const Auto = sequelize.define("auto", {
    patente: {
      type: Sequelize.STRING
    },
    marca: {
      type: Sequelize.STRING
    },
    ano: {
      type: Sequelize.INTEGER
    }
  });

  return Auto;
};
