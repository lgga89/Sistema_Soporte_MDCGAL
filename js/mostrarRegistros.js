llenarTabla();

function llenarTabla() {
  let tbody = document.querySelector("#registro tbody");

  tbody.innerHTML = "";

  let aid = JSON.parse(localStorage.getItem("id_encargado")),
    aencar = JSON.parse(localStorage.getItem("nombre_encargado")),
    adni = JSON.parse(localStorage.getItem("dni_encargado")),
    asede = JSON.parse(localStorage.getItem("sede_encargado")),
    acargo = JSON.parse(localStorage.getItem("cargo_encargado")),
    aoficina = JSON.parse(localStorage.getItem("oficina_encargado")),
    asolicitante = JSON.parse(localStorage.getItem("solicitante_encargado")),
    acodigo = JSON.parse(localStorage.getItem("codigo_patrimonial")),
    acategoria = JSON.parse(localStorage.getItem("categoria_problema")),
    aproblematica = JSON.parse(localStorage.getItem("problematica_problema")),
    afecha = JSON.parse(localStorage.getItem("fecha_servicio")),
    aestado = JSON.parse(localStorage.getItem("estado"));

  let nCantidad = aid.length;
  for (let i = 0; i < nCantidad; i++) {
    let fila = document.createElement("tr");

    let celdaId = document.createElement("td"),
      celdaEncar = document.createElement("td"),
      celdaDni = document.createElement("td"),
      celdaSede = document.createElement("td"),
      celdaCargo = document.createElement("td"),
      celdaOficina = document.createElement("td"),
      celdaSolicitante = document.createElement("td"),
      celdaCodigo = document.createElement("td"),
      celdaCategoria = document.createElement("td"),
      celdaProblematica = document.createElement("td"),
      celdaFecha = document.createElement("td"),
      celdaEstado = document.createElement("td"),
      celdaModificar = document.createElement("td"),
      enlaceModificar = document.createElement("a");

    celdaModificar.setAttribute("class", "btnModificar");
    celdaModificar.setAttribute("id", i);
    enlaceModificar.href = "modificar.html?id" + "=" + i;

    let nodoId = document.createTextNode(aid[i]),
      nodoEncar = document.createTextNode(aencar[i]),
      nodoDni = document.createTextNode(adni[i]),
      nodoSede = document.createTextNode(asede[i]),
      nodoCargo = document.createTextNode(acargo[i]),
      nodoOficina = document.createTextNode(aoficina[i]),
      nodoSolicitante = document.createTextNode(asolicitante[i]),
      nodoCodigo = document.createTextNode(acodigo[i]),
      nodoCategoria = document.createTextNode(acategoria[i]),
      nodoProblematica = document.createTextNode(aproblematica[i]),
      nodoFecha = document.createTextNode(afecha[i]),
      nodoEstado = document.createTextNode(aestado[i]),
      nodoModificar = document.createTextNode("Modificar");

    celdaId.appendChild(nodoId);
    celdaEncar.appendChild(nodoEncar);
    celdaDni.appendChild(nodoDni);
    celdaSede.appendChild(nodoSede);
    celdaCargo.appendChild(nodoCargo);
    celdaOficina.appendChild(nodoOficina);
    celdaSolicitante.appendChild(nodoSolicitante);
    celdaCodigo.appendChild(nodoCodigo);
    celdaCategoria.appendChild(nodoCategoria);
    celdaProblematica.appendChild(nodoProblematica);
    celdaFecha.appendChild(nodoFecha);
    celdaEstado.appendChild(nodoEstado);

    enlaceModificar.appendChild(nodoModificar);
    celdaModificar.appendChild(enlaceModificar);

    fila.appendChild(celdaId);
    fila.appendChild(celdaEncar);
    fila.appendChild(celdaDni);
    fila.appendChild(celdaSede);
    fila.appendChild(celdaCargo);
    fila.appendChild(celdaOficina);
    fila.appendChild(celdaSolicitante);
    fila.appendChild(celdaCodigo);
    fila.appendChild(celdaCategoria);
    fila.appendChild(celdaProblematica);
    fila.appendChild(celdaFecha);
    fila.appendChild(celdaEstado);
    fila.appendChild(celdaModificar);
    tbody.appendChild(fila);
  }
}
