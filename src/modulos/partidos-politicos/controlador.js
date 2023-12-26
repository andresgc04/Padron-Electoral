const db = require("../../DB/mysql");

const conexion = db.conexionMysql();

function obtenerTodosPartidosPoliticos() {
  return new Promise((resolve, reject) => {
    conexion.query(`SELECT * FROM PARTIDOS_POLITICOS`, (error, result) => {
      if (error) return reject(error);
      resolve(result);
    });
  });
}

module.exports = {
  obtenerTodosPartidosPoliticos,
};
