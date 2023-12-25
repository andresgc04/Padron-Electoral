const mysql = require("mysql");
const config = require("../config");

const dbConfig = {
  host: config.mysql.host,
  user: config.mysql.user,
  password: config.mysql.password,
  database: config.mysql.database,
};

function conexionMysql() {
  let conexion;

  conexion = mysql.createConnection(dbConfig);

  conexion.connect((error) => {
    if (error) {
      console.log("[db error]", error);
      setTimeout(conexionMysql, 200);
    } else {
      console.log("DB Conectada!!!");
    }
  });

  conexion.on("error", (error) => {
    console.log("[db error]", error);

    if (error.code === "PROTOCOL_CONNECTION_LOST") {
      conexionMysql();
    } else {
      throw error;
    }
  });

  return conexion;
}

module.exports = {
  conexionMysql,
};
