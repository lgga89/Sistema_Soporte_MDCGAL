//TABLA
var tablaUsuario = localStorage.getItem("tablaUsuarioStorage");
tablaUsuario = JSON.parse(tablaUsuario);
if (tablaUsuario == null) {
  var tablaUsuario = [];
}

// ID
var idForm = localStorage.getItem("idForm");
idForm = JSON.parse(idForm);
if (idForm == null) {
  var idForm = 0;
}
