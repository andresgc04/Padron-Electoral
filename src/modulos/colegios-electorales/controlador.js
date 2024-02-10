const db = require("../../DB/mysql");

const conexion = db.conexionMysql();

function ObtenerTodosLosColegiosElectorales() {
  return new Promise((resolve, reject) => {
    conexion.query(
      `
           SELECT colegiosElectorales.COLEGIO_ELECTORAL_ID, colegiosElectorales.NOMBRE_COLEGIO_ELECTORAL,
                  estados.NOMBRE_ESTADO ESTADO
             FROM COLEGIOS_ELECTORALES colegiosElectorales
       INNER JOIN ESTADOS estados
               ON colegiosElectorales.ESTADO_ID = estados.ESTADO_ID
            WHERE colegiosElectorales.ESTADO_ID = 1 OR colegiosElectorales.ESTADO_ID = 2
      `,
      (error, result) => {
        if (error) return reject(error);
        resolve(result);
      }
    );
  });
}

module.exports = {
  ObtenerTodosLosColegiosElectorales,
};
