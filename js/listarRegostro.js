listar();

//COLOCA LOS DATOS EN LA TABLA DE REGISTROS
function listar() {
  console.log("INGRESANDO A LISTAR...");

  var dataFila = "";

  if (tablaUsuario.length > 0) {
    for (const i in tablaUsuario) {
      var varUsuario = JSON.parse(tablaUsuario[i]);
      dataFila += "<tr>";
      dataFila += "<td>" + varUsuario.idUsuario + "</td>";
      dataFila += "<td>" + varUsuario.encar + "</td>";
      dataFila += "<td>" + varUsuario.dni + "</td>";
      dataFila += "<td>" + varUsuario.sede + "</td>";
      dataFila += "<td>" + varUsuario.cargo + "</td>";
      dataFila += "<td>" + varUsuario.oficina + "</td>";
      dataFila += "<td>" + varUsuario.solicitante + "</td>";
      dataFila += "<td>" + varUsuario.categoria + "</td>";
      dataFila += "<td>" + varUsuario.codPatri + "</td>";
      dataFila += "<td>" + varUsuario.problematica + "</td>";
      dataFila += "<td>" + varUsuario.fecha + "</td>";
      dataFila += "<td>" + varUsuario.estado + "</td>";

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
