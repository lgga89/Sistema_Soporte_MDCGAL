const formu = document.getElementById("formu");
const id = document.getElementById("id");
const nombreEncargado = document.getElementById("nombreEncargado");
const dni = document.getElementById("dni");
const sede = document.getElementById("sede");
const cargo = document.getElementById("cargo");
const oficina = document.getElementById("oficina");
const solicitante = document.getElementById("solicitante");
const categoria = document.getElementById("categoria");
const codPatri = document.getElementById("codPatri");
const problematica = document.getElementById("problematica");
const fecha = document.getElementById("fecha");

formu.addEventListener("submit", (e) => {
  e.preventDefault();
  validateInputs();
});

const setError = (element, message) => {
  const inputControl = element.parentElement;
  const errorDisplay = inputControl.querySelector(".error");

  errorDisplay.innerText = message;
  inputControl.classList.add("error");
  inputControl.classList.remove("success");
};

const setSuccess = (element) => {
  const inputControl = element.parentElement;
  const errorDisplay = inputControl.querySelector(".error");

  errorDisplay.innerText = "";
  inputControl.classList.add("success");
  inputControl.classList.remove("error");
};
/*
const isValidDni = (dni) => {
  const re =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(dni).toLowerCase());
};
*/

const validateInputs = () => {
  const idValue = id.value.trim();
  const nombreEncargadoValue = nombreEncargado.value.trim();
  const dniValue = dni.value.trim();
  const cargoValue = cargo.value.trim();
  const oficinaValue = oficina.value.trim();
  const solicitanteValue = solicitante.value.trim();
  const categoriaValue = categoria.value.trim();
  const sedeValue = codPatri.value.trim();
  const codPatriValue = dni.value.trim();
  const problematicaValue = problematica.value.trim();
  const fechaValue = fecha.value.trim();

  if (idValue === "") {
    setError(id, "Username is required");
  } else {
    setSuccess(id);
  }

  if (nombreEncargadoValue === "") {
    setError(nombreEncargado, "Username is required");
  } else {
    setSuccess(nombreEncargado);
  }

  if (dniValue === "") {
    setError(dni, "Username is required");
  } else {
    setSuccess(dni);
  }

  if (cargoValue === "") {
    setError(cargo, "Username is required");
  } else {
    setSuccess(cargo);
  }

  if (oficinaValue === "") {
    setError(oficina, "Username is required");
  } else {
    setSuccess(oficina);
  }

  if (solicitanteValue === "") {
    setError(solicitante, "Username is required");
  } else {
    setSuccess(solicitante);
  }

  if (categoriaValue === "") {
    setError(categoria, "Username is required");
  } else {
    setSuccess(categoria);
  }

  if (sedeValue === "") {
    setError(sede, "Username is required");
  } else {
    setSuccess(sede);
  }
  if (codPatriValue === "") {
    setError(codPatri, "Username is required");
  } else {
    setSuccess(codPatri);
  }
  if (problematicaValue === "") {
    setError(problematica, "Username is required");
  } else {
    setSuccess(problematica);
  }
  if (fechaValue === "") {
    setError(fecha, "Username is required");
  } else {
    setSuccess(fecha);
  }
};
