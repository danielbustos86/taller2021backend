module.exports = (sequelize, Sequelize) => {
  const Auto = sequelize.define("auto", {
    patente: {
      type: Sequelize.STRING
    },

    marcaId: {
      type: Sequelize.INTEGER,
      references: {
         model: 'marcas', // 'marcas' refers to table name
         key: 'id', // 'id' refers to column name in marca table
      }
    },
    ano: {
      type: Sequelize.INTEGER
    }
  });
  return Auto;
};
