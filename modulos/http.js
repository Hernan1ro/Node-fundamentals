const http = require("http");

http.createServer(router).listen(8000);

function router(request, response) {
  console.log("Nueva petición!");
  console.log(request.url);
  switch (request.url) {
    case "/hola":
      response.write("Hola, que tal?");
      response.end();
      break;
    default:
      response.write("Erro 404: no sé lo que quieres");
      response.end();
  }
  // Escribiendo respuesta al servidor
  // response.writeHead(201, { "content-Type": "text/plain" });
  // response.write("Hola, ya se usar HTTP de NODEJS");
  // response.end();
}
console.log("Escuchando http en el puerto 8000");
