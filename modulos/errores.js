function otraFuncion() {
  return serompe();
}

function serompe() {
  return 3 + z;
}
function serompeAsincrona(callback) {
  setTimeout(() => {
    try {
      return 3 + z;
    } catch (err) {
      console.error("Error en mi función asincrona");
      callback(err);
    }
  });
}
try {
  serompeAsincrona(function (err) {
    console.log("hay error");
    console.log(err.message);
  });
} catch (err) {
  console.log("vaya, algo se ha roto");
  console.error(err.message);
  console.error("Pero no pasa nada lo hemos capturado");
}

console.log("El condigo se sigue ejecutando");
