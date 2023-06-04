function eliminarItem(idItem) {
  for (const i in tablaUsuario) {
    var varUsuario = JSON.parse(tablaUsuario[i]);
    if (varUsuario.idUsuario == idItem) {
      tablaUsuario.splice(i, 1);
      localStorage.setItem("tablaUsuarioStorage", JSON.stringify(tablaUsuario));
    }
  }
  listar();
}
