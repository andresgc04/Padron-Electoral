const db = require("../../DB/mysql");

const conexion = db.conexionMysql();

function ObtenerTodosPaises() {
  return new Promise((resolve, reject) => {
    conexion.query(
      `
       SELECT paises.PAIS_ID,
              UPPER(paises.NOMBRE_PAIS) NOMBRE_PAIS, UPPER(estados.NOMBRE_ESTADO) ESTADO
         FROM PAISES paises
       INNER JOIN ESTADOS estados
               ON paises.ESTADO_ID = estados.ESTADO_ID
         ORDER BY paises.FECHA_CREACION DESC
      `,
      (error, result) => {
        if (error) return reject(error);
        resolve(result);
      }
    );
  });
}

module.exports = {
  ObtenerTodosPaises,
};
