module.exports = {
    HOST: "localhost:3306",
    USER: "root",
    PASSWORD: "Propayers140610",
    DB: "uji_botol",
    dialect: "mysql",
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000
    }
  };