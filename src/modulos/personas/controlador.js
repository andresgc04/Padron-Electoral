const db = require("../../DB/mysql");

const tablaPersonas = "PERSONAS";

function todos() {
  return db.todos(tablaPersonas);
}

module.exports = {
  todos,
};
