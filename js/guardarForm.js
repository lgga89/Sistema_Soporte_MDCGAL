cargarPagina();

// GUARDA LOS DATOS MODIFICADOS EN REGISTRO
function guardar() {
  Swal.fire({
    title: "GUARDAR",
    html: "DESEA GUARDAR LOS CAMBIOS?",
    showDenyButton: true,
    confirmButtonText: "SI",
    denyButtonText: "NO",
  }).then((result) => {
    if (result.isConfirmed) {
      console.log("PRESIONO GUARDAR...");
      var objUsuario = JSON.stringify({
        idUsuario: idForm > 0 ? idForm : tablaUsuario.length + 1,
        encar: document.getElementById("encar").value,
        dni: document.getElementById("dni").value,
        sede: document.getElementById("sede").value,
        cargo: document.getElementById("cargo").value,
        oficina: document.getElementById("oficina").value,
        solicitante: document.getElementById("solicitante").value,
        categoria: document.getElementById("categoria").value,
        codPatri: document.getElementById("codPatri").value,
        problematica: document.getElementById("problematica").value,
        fecha: document.getElementById("fecha").value,
        estado: document.getElementById("estado").value,
      });
      console.log(objUsuario);
      //EDITAR
      if (idForm > 0) {
        for (const i in tablaUsuario) {
          var varUsuario = JSON.parse(tablaUsuario[i]);
          if (varUsuario.idUsuario == idForm) {
            tablaUsuario[i] = objUsuario;
            break;
          }
        }
      } else {
        // NUEVOS USUARIO PEDIDO
        tablaUsuario.push(objUsuario);
      }

      localStorage.setItem("tablaUsuarioStorage", JSON.stringify(tablaUsuario));

      Swal.fire("CAMBIOS  GUARDADOS", "", "success").then((result) => {
        window.location.replace("registro.html");
      });
    } else if (result.isDenied) {
      Swal.fire("CAMBIOS NO GUARDADOS", "", "info");
    }
  });
}
//CARGA LOS DATOS EN EL FORMULARIO PRINCIPAL PARA MODIFICAR
function cargarPagina() {
  if (idForm > 0) {
    // SACAR DATOS DE LA FILA DE LA TABLA Y PONERLO EN EL FORMULARIO
    for (const i in tablaUsuario) {
      var varUsuario = JSON.parse(tablaUsuario[i]);
      if (varUsuario.idUsuario == idForm) {
        document.getElementById("txtidUsuario").value = varUsuario.idUsuario;
        document.getElementById("encar").value = varUsuario.encar;
        document.getElementById("dni").value = varUsuario.dni;
        document.getElementById("sede").value = varUsuario.sede;
        document.getElementById("cargo").value = varUsuario.cargo;
        document.getElementById("oficina").value = varUsuario.oficina;
        document.getElementById("solicitante").value = varUsuario.solicitante;
        document.getElementById("categoria").value = varUsuario.categoria;
        document.getElementById("codPatri").value = varUsuario.codPatri;
        document.getElementById("problematica").value = varUsuario.problematica;
        document.getElementById("fecha").value = varUsuario.fecha;
        document.getElementById("estado").value = varUsuario.estado;

        break;
      }
    }
  }
}
