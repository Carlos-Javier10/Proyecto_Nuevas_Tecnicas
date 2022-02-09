import "./App.css";
import React from "react";
import img from './imagen/emple.jpg';

function App() {
  return (
    <div id="hello">
      <Titulo
        nombre="Administracion de los empleados en el sistema"
        titulo="Formulario Empleados"
        imagen = {img}
      />
      <Formulario/>
    </div>
  );
}


function Titulo(props) {
  console.log(props);
  return (
    <div id="hello">
      <h3>{props.titulo}</h3>
      <p>{props.nombre} </p>
    </div>
  );
}

function Formulario(props) {
  console.log(props);
  return (
    <div id="forma">
      <form id="forma">
        <h3>Registro de Empleado</h3>
        <label>Nombre :</label>
        <input type="text" name="nombre" />
        <br></br>
        <br></br>
        <label>Apellido :</label>
        <input type="text" name="apellido" />
        <br></br>
        <br></br>
        <label>Correo :</label>
        <input type="email" name="apellido" />
        <br></br>
        <br></br>
        <label>Direccion :</label>
        <input type="text" name="apellido" />
        <br></br>
        <br></br>
        <label>Celular :</label>
        <input type="number" name="apellido" />
        <br></br>
        <br></br>
        <label>Puesto:</label>
        <input type="text" name="apellido" />
        <br></br> <br></br>
        <button type="submit">Registrar</button>
      </form>
      <div id="t">
      <form>
      <table >
          <td>
            <tr></tr>
          </td>
      </table>
      </form>
      
      </div>
      
    </div>
  );
}





export default App;
