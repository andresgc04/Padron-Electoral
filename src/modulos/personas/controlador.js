const db = require("../../DB/mysql");

function todos() {
  return db.todos();
}

module.exports = {
  todos,
};
