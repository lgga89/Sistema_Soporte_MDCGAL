if (localStorage.getItem("id_encargado") != null) {
   let  aid = JSON.parse(localStorage.getItem("id")),
       aestado = JSON.parse(localStorage.getItem("estado"));
  }

  let id = getUrlVars()["id"],
  nid=aid[id],
  sestado =  aestado[id],
  btnModificar = document.querySelector("#btnModificar");

  document.querySelector("#id").value = nid;
  document.querySelector("#estado").value = sestado;

  btnModificar.addEventListener("clic",modificar);




function getUrlVars() {
  var vars = {};
  var parts = window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi, function(m,key,value) {
      vars[key] = value;
  });
  return vars;
}

