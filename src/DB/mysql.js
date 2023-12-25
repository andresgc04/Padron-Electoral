const mysql = require("mysql");
const config = require("../config");

const dbConfig = {
  host: config.mysql.host,
  user: config.mysql.user,
  password: config.mysql.password,
  database: config.mysql.database,
};

let conexion;

function conexionMysql() {
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
}

conexionMysql();

function todos() {
  return new Promise((resolve, reject) => {
    conexion.query(
      `SELECT personas.Persona_ID, CONCAT(personas.Nombre, ' ', personas.Apellido) Nombre_Completo,
              personas.No_Cedula,
         CASE 
              WHEN personas.SEXO = 'M' THEN 'MASCULINO'
              WHEN personas.SEXO = 'F' THEN 'FEMENINO'
              ELSE 'DESCONOCIDO'
          END Sexo,
              estados.Nombre_Estado Estado
         FROM PERSONAS personas
   INNER JOIN ESTADOS estados
           ON personas.Estado_ID = estados.Estado_ID`,
      (error, result) => {
        if (error) return reject(error);
        resolve(result);
      }
    );
  });
}

function uno(tabla, id) {}

function agregar(tabla, data) {}

function eliminar(tabla, id) {}

module.exports = {
  todos,
  uno,
  agregar,
  eliminar,
};
