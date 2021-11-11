const fileSystem = require("fs");

function leer(ruta, callback) {
  fileSystem.readFile(ruta, (err, data) => {
    //Leido
    callback(data.toString());
  });
}

function escribir(ruta, contenido, callback) {
  fileSystem.writeFile(ruta, contenido, (err) => {
    if (err) {
      console.log("No he podido escribirlo");
    } else {
      console.log("Se ha escrito correctamente");
    }
  });
}
function borrar(ruta, callback) {
  fileSystem.unlink(ruta, callback);
}

//Para crear o sobreescribir archivos
// escribir(__dirname + "/archivo1.txt", "Soy un archivo nuevo", console.log);

//Para leer archivos
// leer(__dirname + "/archivo.txt", console.log);

//Para borrar archivos
borrar(__dirname + "/archivo1.txt", console.log);
