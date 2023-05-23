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
    aestado = JSON.parse(localStorage.getItem("estado"));
  }
  let id = getUrlVars()["id"],
  nid=aid[id],
  sestado =  aestado[id],
  btnModificar = document.querySelector("#btnModificar");

document.querySelector("#id").value = nid;
document.querySelector("#estado").value = sestado;

btnModificar.addEventListener("clic",modificar);


function modificar(){

    let nid = document.querySelector("#id").value,
   sestado = document.querySelector("#estado").value;

   aid[id]=nid;
   aestado[id ]= sestado;
}





function getUrlVars(){

let vars={};
let parts = window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi, function(m,key,value,vars[key]=value;
});
return vars;
} 


