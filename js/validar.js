function validateForm() {
  let encar = document.getElementById("encar").value;
  let dni = document.getElementById("dni").value;
  let sede = document.getElementById("sede").value;
  let cargo = document.getElementById("cargo").value;
  let oficina = document.getElementById("oficina").value;
  let solicitante = document.getElementById("solicitante").value;
  let categoria = document.getElementById("categoria").value;
  let codPatri = document.getElementById("codPatri").value;
  let problematica = document.getElementById("problematica").value;

  if (encar == "") {
    alert("El Nombre del Encargado de Oficina es requerido");
    return false;
  }

  if (dni == "") {
    alert("El DNI es requerido");
    return false;
  }
  if (sede == "") {
    alert("La Sede es requerido");
    return false;
  }
  if (cargo == "") {
    alert("El cargo es requerido");
    return false;
  }
  if (oficina == "") {
    alert("La Oficina es requerido");
    return false;
  }
  if (solicitante == "") {
    alert("Nombre del solicitante es requerido");
    return false;
  }
  if (categoria == "") {
    alert("La categoria es requerido");
    return false;
  }
  if (codPatri == "") {
    alert("El Codigo Patrimonial es requerido");
    return false;
  }
  if (problematica == "") {
    alert("El  problema que presenta es  requerido");
    return false;
  }

  return true;
}

document.onload = showData();

function AddData() {
  if (validateForm() == true) {
    let id = document.getElementById("id").value;
    let encar = document.getElementById("encar").value;
    let dni = document.getElementById("dni").value;
    let sede = document.getElementById("sede").value;
    let cargo = document.getElementById("cargo").value;
    let oficina = document.getElementById("oficina").value;
    let solicitante = document.getElementById("solicitante").value;
    let categoria = document.getElementById("categoria").value;
    let codPatri = document.getElementById("codPatri").value;
    let problematica = document.getElementById("problematica").value;
    let fecha = document.getElementById("fecha").value;
    let estado = document.getElementById("estado").value;

    var listPeople;
    if (localStorage.getItem("listPeople") == null) {
      listPeople = [];
    } else {
      listPeople = JSON.parse(localStorage.getItem("listPeople"));
    }

    listPeople.push({
      id: id,
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

    localStorage.setItem("listPeople", JSON.stringify(listPeople));

    showData();

    document.getElementById("id").value = "";
    document.getElementById("encar").value = "";
    document.getElementById("dni").value = "";
    document.getElementById("sede").value = "";
    document.getElementById("cargo").value = "";
    document.getElementById("oficina").value = "";
    document.getElementById("solicitante").value = "";
    document.getElementById("categoria").value = "";
    document.getElementById("codPatri").value = "";
    document.getElementById("problematica").value = "";
    document.getElementById("fecha").value = "";
    document.getElementById("estado").value = "";
  }
}
