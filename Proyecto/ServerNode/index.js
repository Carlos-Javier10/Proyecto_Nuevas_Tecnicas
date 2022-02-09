/*const http = require('http');
const colors = require('colors');
const funcionServidor = function(req, res){
        //res.write("El servidor esta levantado");
        res.write('<h1> Hello world </h1>');
        res.end("termina");
    }
const server = http.createServer(funcionServidor);
server.listen(3000, ()=>{console.log('Servidor levantado')});
*/

const express = require("express");
const server = express();

server.use(express.json());

server.get("/", function (req, res) {
  res.json({
    id: 2,
    Nombre_Empleado: "Ernie",
    Apellido: "Shelton",
    Correo: "eshelton1@github.com",
    Direccion: "3239 Merchant Road",
    Celular: "275 - 709 - 3976",
    Puesto: "Recepcionista",
  });
});

server.post("/", function (req, res) {
  res.send("<h1>POST raiz</h1>");
});
server.put("/", function (req, res) {
  res.send("<h1>PUT raiz</h1>");
});
server.delete("/", function (req, res) {
  res.send("<h1>DELETE raiz</h1>");
});
//
server.post("/ingresarEmpleado", function (req, res) {
  console.log(req.body);
  res.send("<h1>Empleado Ingresado</h1>");
});
server.put("/actualizarEmpleado", function (req, res) {
  res.send("<h1>Empleado Actualizado</h1>");
});
server.delete("/eliminarEmpleado", function (req, res) {
  res.send("<h1>Empleado Eliminado</h1>");
});

server.listen(4000, function () {
  console.log("Server en el puerto 4000");
});

/*
server.use(morgan('tiny'));
server.set('port', 4000);

server.get('/conParametro/:id',(req,res)=>{
    console.log(req.params)
    res.send("<h1> con parametros </h1>")
})
server.get('/conParametro1/:id',(req,res)=>{
    console.log(req.params)
    res.send("<h1> con parametros </h1>")
})

server.listen(server.get('port'), (req,res)=>{
    console.log("server en el puerto ", server.get('port'))
})
*/
/*server.use(express.json());*/
