








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