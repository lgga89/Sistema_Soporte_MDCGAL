var tablaUsuario = localStorage.getItem("tablaUsuarioStorage");
tablaUsuario = JSON.parse(tablaUsuario);
if (tablaUsuario == null) {
  var tablaUsuario = [];
}

//abre nuevo formulario BOTON NUEVO
function abrirForm(idForm) {
  localStorage.setItem("idForm", JSON.stringify(idForm));
  window.location.replace("modificar.html");
}
