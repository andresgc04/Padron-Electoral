const db = require("../../DB/mysql");

const conexion = db.conexionMysql();

function ObtenerTodasPosicionesPoliticas() {
  return new Promise((resolve, reject) => {
    conexion.query(
      `    SELECT posicionesPoliticas.POSICION_POLITICA_ID, 
                  UPPER(posicionesPoliticas.NOMBRE_POSICION_POLITICA) NOMBRE_POSICION_POLITICA,     
                  estados.NOMBRE_ESTADO
             FROM POSICIONES_POLITICAS posicionesPoliticas
       INNER JOIN ESTADOS estados
               ON posicionesPoliticas.ESTADO_ID = estados.ESTADO_ID
         ORDER BY posicionesPoliticas.FECHA_CREACION DESC
        `,
      (error, result) => {
        if (error) return reject(error);
        resolve(result);
      }
    );
  });
}

module.exports = {
  ObtenerTodasPosicionesPoliticas,
};
