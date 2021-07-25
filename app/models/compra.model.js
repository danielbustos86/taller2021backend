module.exports = (sequelize, Sequelize) => {
  const Compra = sequelize.define("compra", {

    idAuto: {
      type: Sequelize.INTEGER,
      references: {
         model: 'autos', // 'autos' refers to table name
         key: 'id', // 'id' refers to column name in marca table
      }
    },
    idPersona: {
      type: Sequelize.INTEGER,
      references: {
         model: 'personas', // 'autos' refers to table name
         key: 'id', // 'id' refers to column name in marca table
      }
    },
    fecha: {
      type: Sequelize.DATE
    },


   
  },
  {freezeTableName: true});
  return Compra;
};
