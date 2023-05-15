const fomrulario = document.getElementById("fomrulario");
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

fomrulario.addEventListener("submit", (e) => {
  e.preventDefault();

  checkInputs();
});

function checkInputs() {
  // trim to remove the whitespaces
  const idValue = id.value.trim();
  const nombreEncargadoValue = nombreEncargado.value.trim();
  const dniValue = dni.value.trim();
  const sedeValue = sedevalue.trim();
  const cargoValue = cargo.value.trim();
  const oficinaValue = oficina.value.trim();
  const solicitanteValue = solicitante.value.trim();
  const categoriaValue = categoria.value.trim();
  const codPatriValue = codPatri.value.trim();
  const problematicaValue = problematica.value.trim();
  const fechaValue = fecha.value.trim();

  if (idValue === "") {
    setErrorFor(id, "Username cannot be blank");
  } else {
    setSuccessFor(id);
  }

  if (nombreEncargadoValue === "") {
    setErrorFor(nombreEncargado, "Password cannot be blank");
  } else {
    setSuccessFor(nombreEncargado);
  }

  if (dniValue === "") {
    setErrorFor(dni, "Password cannot be blank");
  } else {
    setSuccessFor(dni);
  }

  if (sedeValue === "") {
    setErrorFor(sede, "Password cannot be blank");
  } else {
    setSuccessFor(sede);
  }

  if (cargoValue === "") {
    setErrorFor(cargo, "Password cannot be blank");
  } else {
    setSuccessFor(cargo);
  }

  if (oficinaValue === "") {
    setErrorFor(oficina, "Password cannot be blank");
  } else {
    setSuccessFor(oficina);
  }
  if (solicitanteValue === "") {
    setErrorFor(solicitante, "Password cannot be blank");
  } else {
    setSuccessFor(solicitante);
  }
  if (categoriaValue === "") {
    setErrorFor(categoria, "Password cannot be blank");
  } else {
    setSuccessFor(categoria);
  }
  if (codPatriValue === "") {
    setErrorFor(codPatri, "Password cannot be blank");
  } else {
    setSuccessFor(codPatri);
  }
  if (problematicaValue === "") {
    setErrorFor(problematica, "Password cannot be blank");
  } else {
    setSuccessFor(problematica);
  }
  if (fechaValue === "") {
    setErrorFor(fecha, "Password cannot be blank");
  } else {
    setSuccessFor(fecha);
  }
}

function setErrorFor(input, message) {
  const formControl = input.parentElement;
  const small = formControl.querySelector("small");
  formControl.className = "form-control error";
  small.innerText = message;
}

function setSuccessFor(input) {
  const formControl = input.parentElement;
  formControl.className = "form-control success";
}

function isDni(dni) {
  return /^.{1,8}$/.test(dni);
}
function iscodPatri(codPatri) {
  return /^.{1,12}$/.test(codPatri);
}

// SOCIAL PANEL JS
const floating_btn = document.querySelector(".floating-btn");
const close_btn = document.querySelector(".close-btn");
const social_panel_container = document.querySelector(
  ".social-panel-container"
);

floating_btn.addEventListener("click", () => {
  social_panel_container.classList.toggle("visible");
});

close_btn.addEventListener("click", () => {
  social_panel_container.classList.remove("visible");
});
