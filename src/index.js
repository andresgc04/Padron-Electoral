const app = require("./app");

app.listen(app.get("port"), () => {
  console.log("Servidor Escuchando En El Puerto", app.get("port"));
});
