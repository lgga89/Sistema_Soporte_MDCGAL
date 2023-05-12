const formulario = document.getElementById("formulario");
const inputs = document.querySelectorAll("#formulario input");
const select = document.querySelectorAll("#formulario select");

const expresiones = {
  id: /^\d{1,100000000}$,/, // 7 a 14 numeros.
  nombreEncargado: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
  dni: /^\d{1,7}$/, // 7 a 14 numeros.
  sede: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
  cargo: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
  oficina: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
  solicitante: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
  categoria: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
  codPatri: /^\d{1,12}$/, // 7 a 14 numeros.
  problematica: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
  fecha: /^\d{1,7}$/,
};

const campos = {
  id: false,
  nombreEncargado: false,
  dni: false,
  sede: false,
  cargo: false,
  oficina: false,
  solicitante: false,
  categoria: false,
  codPatri: false,
  problematica: false,
  fecha: false,
};

const validarFormulario = (e) => {
  switch (e.target.name) {
    case "id":
      validarCampo(expresiones.id, e.target, "id");
      break;
    case "nombreEncargado":
      validarCampo(expresiones.nombreEncargado, e.target, "nombreEncargado");
      break;
    case "dni":
      validarCampo(expresiones.dni, e.target, "dni");
      break;
    case "sede":
      validarCampo(expresiones.sede, e.target, "sede");
      break;
    case "cargo":
      validarCampo(expresiones.cargo, e.target, "cargo");
      break;

    case "oficina":
      validarCampo(expresiones.oficina, e.target, "oficina");
      break;

    case "solicitante":
      validarCampo(expresiones.solicitante, e.target, "solicitante");
      break;
    case "categoria":
      validarCampo(expresiones.categoria, e.target, "categoria");
      break;
    case "codPatri":
      validarCampo(expresiones.codPatri, e.target, "codPatri");
      break;
    case "problematica":
      validarCampo(expresiones.problematica, e.target, "problematica");
      break;
    case "fecha":
      validarCampo(expresiones.fecha, e.target, "fecha");
      break;
  }
};

const validarCampo = (expresion, input, campo) => {
  if (expresion.test(input.value)) {
    document.getElementById(`grupo__${campo}`).classList.remove("formulario__grupo-incorrecto");
    document.getElementById(`grupo__${campo}`).classList.add("formulario__grupo-correcto");
    document.querySelector(`#grupo__${campo} i`).classList.add("fa-check-circle");
    document.querySelector(`#grupo__${campo} i`).classList.remove("fa-times-circle");
    document.querySelector(`#grupo__${campo} .formulario__input-error`).classList.remove("formulario__input-error-activo");
    campos[campo] = true;
  } else {
    document.getElementById(`grupo__${campo}`).classList.add("formulario__grupo-incorrecto");
    document.getElementById(`grupo__${campo}`).classList.remove("formulario__grupo-correcto");
    document.querySelector(`#grupo__${campo} i`).classList.add("fa-times-circle");
    document.querySelector(`#grupo__${campo} i`).classList.remove("fa-check-circle");
    document.querySelector(`#grupo__${campo} .formulario__input-error`).classList.add("formulario__input-error-activo");
    campos[campo] = false;
  }
};

inputs.forEach((input) => {
  input.addEventListener("keyup", validarFormulario);
  input.addEventListener("blur", validarFormulario);
});

formulario.addEventListener("submit", (e) => {
  e.preventDefault();

  const terminos = document.getElementById("terminos");
  if (
    campos.id &&
    campos.nombre &&
    campos.nombreEncargado &&
    campos.dni &&
    campos.sede &&
    campos.cargo &&
    campos.oficina &&
    campos.solicitante &&
    campos.categoria &&
    campos.codPatri &&
    campos.problematica &&
    campos.fecha &&
    terminos.checked
  ) {
    formulario.reset();

    document.getElementById("formulario__mensaje-exito").classList.add("formulario__mensaje-exito-activo");
    setTimeout(() => {
      document.getElementById("formulario__mensaje-exito").classList.remove("formulario__mensaje-exito-activo");
    }, 5000);

    document.querySelectorAll(".formulario__grupo-correcto").forEach((icono) => {
        icono.classList.remove("formulario__grupo-correcto");
      });
  } else {
    document.getElementById("formulario__mensaje").classList.add("formulario__mensaje-activo");
  }
});

/*function validarForm(){


let nomEncar = document.getElementById("nombreEncargado").value;
let dni = document.getElementById("dni").value;
let sede = document.getElementById("sede").value;
let cargo = document.getElementById("cargo").value;
let oficina = document.getElementById("oficina").value;
let solicitante = document.getElementById("solicitante").value;
let catergoria = document.getElementById("catergoria").value;
let codPatri = document.getElementById("codPatri").value;
let problematica = document.getElementById("problematica").value;
let fecha = document.getElementById("fecha").value;
let error = document.getElementById("error").value;
error.style.color = "red";


if(nomEncar ==""){
    alert("Ingrese el Nombre del Encargado es obligatorio");
return false;
}
if(dni ==""){
    alert("Ingrese el DNI es obligatorio");
return false;
}
if(sede ==""){
    alert("Ingrese la Sede es obligatorio");
return false;
}
if(cargo ==""){
    alert("Ingrese el Cargo es obligatorio");
return false;
}
if(oficina ==""){
    alert("Ingrese la Oficina es obligatorio");
return false;
}
if(solicitante ==""){
    alert("Ingrese el  Nombre del Solicitante es obligatorio");
return false;
}
if(catergoria ==""){
    alert("Ingrese  la Categoria es obligatorio");
return false;
}
if(codPatri ==""){
    alert("Ingrese el  Codigo Patrimonial es obligatorio");
return false;
}
if(problematica ==""){
    alert("Ingrese la Problematica es obligatorio");
return false;
}
if(fecha ==""){
    alert("Ingrese la Fecha de Registro es obligatorio");
return false;
}
return
}
validarForm()



/*
function ReadDatos(){
    let listaDatos;
    if(localStorage.getItem("listaDatos")==null){
        listaDatos = [];}

        else{
            listaDatos = JSON.parse(localStorage.getItem("listaDatos"));
        }
let html = "";
listaDatos.forEach(function(element, index){


    html +="<tr>";
    html += "<td>"+ element.nomEncar + "</td>";
    html += "<td>"+ element.dni + "</td>";
    html += "<td>"+ element.sede + "</td>";
    html += "<td>"+ element.cargo + "</td>";
    html += "<td>"+ element.oficina + "</td>";
    html += "<td>"+ element.catergoria+ "</td>";
    html += "<td>"+ element.solicitante  + "</td>";
    html += "<td>"+ element.problematica  + "</td>";
    html += "<td>"+ element.fecha + "</td>";
    html += '<td><button onclick="deleteData('+ index +')" class ="nextBtn">Eliminar Dato</button>
    <button onclick="editData('+ index +')" class ="nextBtn">Eliminar Dato</button>';
html +="</tr>";


});

    }



*/
