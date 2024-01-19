const db = require("../../DB/mysql");

const conexion = db.conexionMysql();

function obtenerTodosPartidosPoliticos() {
  return new Promise((resolve, reject) => {
    conexion.query(
      `SELECT partidosPoliticos.PARTIDO_POLITICO_ID, 
                  partidosPoliticos.NOMBRE_PARTIDO_POLITICO, partidosPoliticos.SIGLAS_PARTIDO_POLITICO,
                  estados.NOMBRE_ESTADO ESTADO
             FROM PARTIDOS_POLITICOS partidosPoliticos
       INNER JOIN ESTADOS estados
               ON partidosPoliticos.ESTADO_ID = estados.ESTADO_ID`,
      (error, result) => {
        if (error) return reject(error);
        resolve(result);
      }
    );
  });
}

module.exports = {
  obtenerTodosPartidosPoliticos,
};
