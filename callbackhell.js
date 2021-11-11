function hola(nombre, miCallback) {
  setTimeout(() => {
    console.log("Hola " + nombre);
    miCallback(nombre);
  }, 1000);
}

function hablar(callbackhablar) {
  setTimeout(() => {
    console.log("Bla, bla, bla...");
    callbackhablar();
  }, 1000);
}

function adios(nombre, otroCallback) {
  setTimeout(() => {
    console.log("Adios " + nombre);
    otroCallback();
  }, 1000);
}

function conversacion(nombre, veces, callback) {
  if (veces > 0) {
    hablar(function () {
      conversacion(nombre, --veces, callback);
    });
  } else {
    adios(nombre, callback);
  }
}
console.log("Iniciando proceso...");
hola("carlos", function (nombre) {
  conversacion(nombre, 3, function () {
    console.log("Proceso terminado");
  });
});
// función principal
// hola("Hernan", function (nombre) {
//   adios(nombre, function () {
//     console.log("Terminanos");
//   });
// });

//CAllBACK HELL
// console.log("Iniciando proceso...");
// hola("Hernan", function (nombre) {
//   hablar(function () {
//     hablar(function () {
//       hablar(function () {
//         adios(nombre, function () {
//           console.log("Finalizando proceso...");
//         });
//       });
//     });
//   });
// });
