// const process = require("process");

process.on("beforeExit", () => {
  console.log("Me voy");
});
process.on("exit", () => {
  console.log("Asi te queria ver puerco");
  setTimeout(() => {
    console.log("Esto no se va a ver nunca");
  }, 1000);
});

process.on("uncaughtException", (err, origen) => {
  console.error("Vaya se nos olvido capturar un error");
  console.error(err);
});

functionQuenoExiste();

console.log("Esto si el error no se recoje, no sale");
