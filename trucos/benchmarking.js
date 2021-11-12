console.time("Todo");
let suma = 0;
let suma2 = 0;

console.time("bucle");
for (let i = 0; i < 1000000000; i++) {
  suma += 1;
}
console.timeEnd("bucle");

console.time("bucle2");
for (let j = 0; j < 1000000000; j++) {
  suma2 += 2;
}
console.timeEnd("bucle2");

console.log("Asincrono ------------");
asincrona().then(() => {
  console.log("asincrono");
});

console.timeEnd("Todo");

function asincrona() {
  return new Promise((resolve) => {
    setTimeout(function () {
      console.log("Termina el proceso asincrono");
      resolve();
    });
  });
}
