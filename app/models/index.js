const dbConfig = require("../config/db.config.js");

const Sequelize = require("sequelize");
const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
  host: dbConfig.HOST,
  dialect: dbConfig.dialect,

  pool: {
    max: dbConfig.pool.max,
    min: dbConfig.pool.min,
    acquire: dbConfig.pool.acquire,
    idle: dbConfig.pool.idle
  }
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;


db.persona = require("./persona.model.js")(sequelize, Sequelize);
db.auto = require("./auto.model.js")(sequelize, Sequelize);
db.marca = require("./amarca.model.js")(sequelize, Sequelize);
db.compra = require("./compra.model.js")(sequelize, Sequelize);


const Auto = db.auto;
const Marca = db.marca;

Auto.belongsTo(Marca, {foreignKey: 'marcaId'});

Marca.hasMany(Auto);

const Compra = db.compra;
const Persona = db.persona;

Compra.belongsTo(Persona, {foreignKey: 'idPersona'});
Compra.belongsTo(Auto, {foreignKey: 'idAuto'});



module.exports = db;
