if (localStorage.getItem("id_encargado") != null) {
  var aid = JSON.parse(localStorage.getItem("id_encargado")),
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
}
var id = getUrlVars()["id"],
  nid = aid[id],
  snombrEncar = aencar[id],
  sdni = adni[id],
  ssede = asede[id],
  scargo = acargo[id],
  soficina = aoficina[id],
  ssolicitante = asolicitante[id],
  scodigo = acodigo[id],
  scategoria = acategoria[id],
  sproblematica = aproblematica[id],
  sfecha = afecha[id],
  sestado = aestado[id];
btnModificar = document.querySelector("#btnModificar");

document.querySelector("#id").value = nid;
document.querySelector("#estado").value = sestado;
document.querySelector("#nombreEncargado").value = snombrEncar;
document.querySelector("#dni").value = sdni;
document.querySelector("#sede").value = ssede;
document.querySelector("#cargo").value = scargo;
document.querySelector("#oficina").values = soficina;
document.querySelector("#solicitante").value = ssolicitante;
document.querySelector("#codPatri").value = scodigo;
document.querySelector("#categoria").value = scategoria;
document.querySelector("#problematica").value = sproblematica;
document.querySelector("#fecha").value = sfecha;
document.querySelector("#estado").value = sestado;

btnModificar.addEventListener("clic", modificar);

function modificar() {
  var id = document.querySelector("#id").value,
    snombrEncar = document.querySelector("#nombreEncargado").value,
    sdni = document.querySelector("#dni").value,
    ssede = document.querySelector("#sede").value,
    scargo = document.querySelector("#cargo").value,
    soficina = document.querySelector("#oficina").value,
    ssolicitante = document.querySelector("#solicitante").value,
    scodigo = document.querySelector("#codPatri").value,
    scategoria = document.querySelector("#categoria").value,
    sproblematica = document.querySelector("#problematica").value,
    sfecha = document.querySelector("#fecha").value,
    sestado = document.querySelector("#estado").value;

  aid[id] = nid;
  aencar[id] = snombrEncar;
  adni[id] = sdni;
  asede[id] = ssede;
  acargo[id] = scargo;
  aoficina[id] = soficina;
  asolicitante[id] = ssolicitante;
  acodigo[id] = scodigo;
  acategoria[id] = scategoria;
  aproblematica[id] = sproblematica;
  afecha[id] = sfecha;
  aestado[id] = sestado;
}

function getUrlVars() {
  var vars = {};
  var parts = window.location.href.replace(
    /[?&]+([^=&]+)=([^&]*)/gi,
    function (m, key, value) {
      vars[key] = value;
    }
  );
  return vars;
}
