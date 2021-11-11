//Manejador de los intervalos

// let i = 0;
// let intervalo = setInterval(function () {
//   console.log("Running");
//   if (i === 3) {
//     clearInterval(intervalo);
//   }
//   i++;
// }, 1000);

// setImmediate(function () {
//   console.log("Hola");
// });

//Acceso a directorio y file
console.log(__filename);
console.log(__dirname);

//Variables globales

global.miVariable = "El valor";
console.log(miVariable);
