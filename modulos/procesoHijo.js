const { exec, spawn } = require("child_process");

//funcion para ejecutar comandos en consola
// exec("node modulos/consola.js", (err, stdout, sterr) => {
//   if (err) {
//     console.error(err);
//     return false;
//   }
//   console.log(stdout);
// });

//Empezar un proceso
let proceso = spawn("ls", ["-la"]);

console.log(proceso.pid);
console.log(proceso.connected);

proceso.stdout.on("data", function (data) {
  console.log("Está muerto?");
  console.log(proceso.killed);
  console.log(data.toString());
});

proceso.on("exit", function () {
  console.log("El  proceso terminó");
  console.log(proceso.killed);
});
