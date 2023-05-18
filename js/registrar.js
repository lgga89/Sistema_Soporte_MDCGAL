let aid = [],
  aencar = [],
  adni = [],
  asede = [],
  acargo = [],
  aoficina = [],
  asolicitante = [],
  acodigo = [],
  acategoria = [],
  aproblematica = [],
  afecha = [];

if (localStorage.getItem("id_encargado") != null) {
  aid = JSON.parse(localStorage.getItem("id_encargado"));
  aencar = JSON.parse(localStorage.getItem("nombre_encargado"));
  adni = JSON.parse(localStorage.getItem("dni_encargado"));
  asede = JSON.parse(localStorage.getItem("sede_encargado"));
  acargo = JSON.parse(localStorage.getItem("cargo_encargado"));
  aoficina = JSON.parse(localStorage.getItem("oficina_encargado"));
  asolicitante = JSON.parse(localStorage.getItem("solicitante_encargado"));
  acodigo = JSON.parse(localStorage.getItem("codigo_patrimonial"));
  acategoria = JSON.parse(localStorage.getItem("categoria_problema"));
  aproblematica = JSON.parse(localStorage.getItem("problematica_problema"));
  afecha = JSON.parse(localStorage.getItem("fecha_servicio"));
}

let elementoBtnRegistrar = document.querySelector("#btnRegistrar");
elementoBtnRegistrar.addEventListener("click", registrar);

function registrar() {
  let sid = document.querySelector("#id").value,
    snombrEncar = document.querySelector("#nombreEncargado").value,
    sdni = document.querySelector("#dni").value,
    ssede = document.querySelector("#sede").value,
    scargo = document.querySelector("#cargo").value,
    soficina = document.querySelector("#oficina").value,
    ssolicitante = document.querySelector("#solicitante").value,
    scodigo = document.querySelector("#codPatri").value,
    scategoria = document.querySelector("#categoria").value,
    sproblematica = document.querySelector("#problematica").value,
    sfecha = document.querySelector("#fecha").value;

  aid.push(sid);
  aencar.push(snombrEncar);
  adni.push(sdni);
  asede.push(ssede);
  acargo.push(scargo);
  aoficina.push(soficina);
  asolicitante.push(ssolicitante);
  acodigo.push(scodigo);
  acategoria.push(scategoria);
  aproblematica.push(sproblematica);
  afecha.push(sfecha);

  localStorage.setItem("id_encargado", JSON.stringify(aid));
  localStorage.setItem("nombre_encargado", JSON.stringify(aencar));
  localStorage.setItem("dni_encargado", JSON.stringify(adni));
  localStorage.setItem("sede_encargado", JSON.stringify(asede));
  localStorage.setItem("cargo_encargado", JSON.stringify(acargo));
  localStorage.setItem("oficina_encargado", JSON.stringify(aoficina));
  localStorage.setItem("solicitante_encargado", JSON.stringify(asolicitante));
  localStorage.setItem("codigo_patrimonial", JSON.stringify(acodigo));
  localStorage.setItem("categoria_problema", JSON.stringify(acategoria));
  localStorage.setItem("problematica_problema", JSON.stringify(aproblematica));
  localStorage.setItem("fecha_servicio", JSON.stringify(afecha));

  llenarTabla();
}
