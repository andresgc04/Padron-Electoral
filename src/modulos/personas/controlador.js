const db = require("../../DB/mysql");

const conexion = db.conexionMysql();

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

module.exports = {
  todos,
};
