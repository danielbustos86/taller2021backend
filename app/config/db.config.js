module.exports = {
  HOST: "localhost",
  USER: "postgres",
  PASSWORD: "taller2021",
  DB: "taller2021",
  dialect: "postgres",
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
};
