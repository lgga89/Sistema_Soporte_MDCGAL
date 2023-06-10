listar();

//COLOCA LOS DATOS EN LA TABLA DE REGISTROS
function listar() {
  console.log("INGRESANDO A LISTAR...");

  var dataFila = "";

  if (tablaUsuario.length > 0) {
    for (const i in tablaUsuario) {
      var varUsuario = JSON.parse(tablaUsuario[i]);
      dataFila += "<tr>";
      dataFila += "<td data-titulo='ID'>" + varUsuario.idUsuario + "</td>";
      dataFila +=
        "<td data-titulo='ENCARGADO DEL AREA'>" + varUsuario.encar + "</td>";
      dataFila += "<td data-titulo='DNI'>" + varUsuario.dni + "</td>";
      dataFila += "<td data-titulo='SEDE'>" + varUsuario.sede + "</td>";
      dataFila += "<td data-titulo='CARGO'>" + varUsuario.cargo + "</td>";
      dataFila += "<td data-titulo='OFICINA'>" + varUsuario.oficina + "</td>";
      dataFila +=
        "<td data-titulo='SOLICITANTE'>" + varUsuario.solicitante + "</td>";
      dataFila +=
        "<td data-titulo='CATEGORIA'>" + varUsuario.categoria + "</td>";
      dataFila +=
        "<td data-titulo='CODIGO PATRIMONIAL'>" + varUsuario.codPatri + "</td>";
      dataFila +=
        "<td data-titulo='PROBLEMATICA'>" + varUsuario.problematica + "</td>";
      dataFila += "<td data-titulo='FECHA'>" + varUsuario.fecha + "</td>";
      dataFila += "<td data-titulo='ESTADO'>" + varUsuario.estado + "</td>";

      dataFila +=
        "<td>" +
        "<button type='button' class='btn btn-warning' onclick='abrirForm(" +
        varUsuario.idUsuario +
        ")'>EDITAR</button>" +
        "<button type='button' class='btn btn-info' onclick='eliminarItem(" +
        varUsuario.idUsuario +
        ")'>ELIMINAR</button>" +
        "</td>";
      dataFila += "</tr>";
    }
    document.getElementById("dataUsuario").innerHTML = dataFila;
  } else {
    document.getElementById("dataUsuario").innerHTML =
      "<tr><td colspan='7'>No hay datos</td></tr>";
  }
}
