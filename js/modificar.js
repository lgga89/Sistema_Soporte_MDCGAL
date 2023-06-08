
//read
function showData(){

    let listPeople;

    if (localStorage.getItem('listPeople') == null) {
        listPeople = [];
    }else{
        listPeople = JSON.parse(localStorage.getItem("listPeople"));
    }

    var html = "";

    listPeople.forEach(function(element, index){
        html += "<tr>";
        html += "<td data-label='Consola'>" + element.encar + "</td>";
        html += "<td data-label='Consola'>" + element.dni + "</td>";
        html += "<td data-label='Consola'>" + element.sede + "</td>";
        html += "<td data-label='Consola'>" + element.cargo + "</td>";
        html += "<td data-label='Consola'>" + element.oficina + "</td>";
        html += "<td data-label='Consola'>" + element.solicitante + "</td>";
        html += "<td data-label='Consola'>" + element.categoria + "</td>";
        html += "<td data-label='Consola'>" + element.codPatri + "</td>";
        html += "<td data-label='Consola'>" + element.problematica + "</td>";
        html += "<td data-label='Consola'>" + element.fecha + "</td>";
        html += "<td data-label='Consola'>" + element.estado + "</td>";
  

        html += '<td><button onclick="deleteData('+ index +')" class="btn btn-danger">Eliminar dato</button> <button onclick="updateData('+ index +')" class="btn btn-warning">Editar dato</button></td>';
        html += "</tr>";
    });

    document.querySelector('#tabla tbody').innerHTML = html;
}














//create
document.onload = showData();

function AddData(){
    if (validateForm() == true) {
        let encar = document.getElementById('encar').value;
        let dni = document.getElementById('dni').value;
        let sede = document.getElementById('sede').value;
        let cargo = document.getElementById('cargo').value;
        let oficina = document.getElementById('oficina').value;
        let solicitante = document.getElementById('solicitante').value;
        let categoria = document.getElementById('categoria').value;
        let codPatri = document.getElementById('codPatri').value;
        let problematica = document.getElementById('problematica').value;
        let fecha = document.getElementById('fecha').value;
        let estado = document.getElementById('estado').value;
   

        var listPeople;
        if (localStorage.getItem('listPeople') == null) {
            listPeople = [];
        }else{
            listPeople = JSON.parse(localStorage.getItem("listPeople"));
        }

        listPeople.push({
            encar: encar,
            dni: dni,
            sede: sede,
            cargo: cargo,
            oficina: oficina,
            solicitante: solicitante,
            categoria: categoria,
            codPatri: codPatri,
            problematica: problematica,
            fecha: fecha,
            estado: estado,
        });

        localStorage.setItem('listPeople', JSON.stringify(listPeople));

        showData();

        document.getElementById('encar').value = "";
        document.getElementById('dni').value = "";
        document.getElementById('sede').value = "";
        document.getElementById('cargo').value = "";
        document.getElementById('oficina').value = "";
        document.getElementById('solicitante').value = "";
        document.getElementById('categoria').value = "";
        document.getElementById('codPatri').value = "";
        document.getElementById('problematica').value = "";
        document.getElementById('fecha').value = "";
        document.getElementById('estado').value = "";
       
    }
}

/*delete */
function deleteData(index){

    var listPeople;
    if (localStorage.getItem('listPeople') == null) {
        listPeople = [];
    }else{
        listPeople = JSON.parse(localStorage.getItem("listPeople"));
    }

    listPeople.splice(index, 1);
    localStorage.setItem('listPeople', JSON.stringify(listPeople));
    showData();
}

/*update */

function updateData(index){
    document.getElementById("btnAdd").style.display = 'none';
    document.getElementById("btnUpdate",btnAdd).style.display = 'block';

    var listPeople;
    if (localStorage.getItem('listPeople') == null) {
        listPeople = [];
    }else{
        listPeople = JSON.parse(localStorage.getItem("listPeople"));
    }

    document.getElementById('encar').value = listPeople[index].encar;
    document.getElementById('dni').value = listPeople[index].dni;
    document.getElementById('sede').value = listPeople[index].sede;
    document.getElementById('cargo').value = listPeople[index].cargo;
    document.getElementById('oficina').value = listPeople[index].oficina;
    document.getElementById('solicitante').value = listPeople[index].solicitante;
    document.getElementById('categoria').value = listPeople[index].categoria;
    document.getElementById('codPatri').value = listPeople[index].codPatri;
    document.getElementById('problematica').value = listPeople[index].problematica;
    document.getElementById('fecha').value = listPeople[index].fecha;
    document.getElementById('estado').value = listPeople[index].estado;


    document.querySelector("#btnUpdate").onclick = function(){
        if (validateForm() == true) {
            listPeople[index].encar = document.getElementById('encar').value;
            listPeople[index].dni = document.getElementById('dni').value;
            listPeople[index].sede = document.getElementById('sede').value;
            listPeople[index].cargo = document.getElementById('cargo').value;
            listPeople[index].oficina = document.getElementById('oficina').value;
            listPeople[index].solicitante = document.getElementById('solicitante').value;
            listPeople[index].categoria = document.getElementById('categoria').value;
            listPeople[index].codPatri = document.getElementById('codPatri').value;
            listPeople[index].problematica = document.getElementById('problematica').value;
            listPeople[index].fecha = document.getElementById('fecha').value;
            listPeople[index].estado = document.getElementById('estado').value;

            localStorage.setItem('listPeople', JSON.stringify(listPeople));
            showData();

            document.getElementById('encar').value = "";
            document.getElementById('dni').value = "";
            document.getElementById('sede').value = "";
            document.getElementById('cargo').value = "";
            document.getElementById('oficina').value = "";
            document.getElementById('solicitante').value = "";
            document.getElementById('categoria').value = "";
            document.getElementById('codPatri').value = "";
            document.getElementById('problematica').value = "";
            document.getElementById('fecha').value = "";
            document.getElementById('estado').value = "";

            document.getElementById("btnAdd").style.display = 'block';
            document.getElementById("btnUpdate",btnAdd).style.display = 'none';
        }
    };
}