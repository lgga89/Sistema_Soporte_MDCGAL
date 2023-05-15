
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



form.addEventListener('submit', e => {
    e.preventDefault();

    validateInputs();
});

const setError = (element, message) => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = message;
    inputControl.classList.add('error');
    inputControl.classList.remove('success')
}

const setSuccess = element => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = '';
    inputControl.classList.add('success');
    inputControl.classList.remove('error');
};

const isDni = dni => {
    const re = /^.{1,8}$/;
    return re.test(String(dni).toLowerCase());
}
const iscodPatri = dni => {
  const re = /^.{1,12}$/;
  return re.test(String(codPatri).toLowerCase());
}

/*
function isDni(dni) {
  return /^.{1,8}$/.test(dni);
}
function iscodPatri(codPatri) {
  return /^.{1,12}$/.test(codPatri);
}

*/


const validateInputs = () => {
    const usernameValue = username.value.trim();
    const emailValue = email.value.trim();
    const passwordValue = password.value.trim();
    const password2Value = password2.value.trim();






    if(usernameValue === '') {
        setError(username, 'Username is required');
    } else {
        setSuccess(username);
    }

    if(emailValue === '') {
        setError(email, 'Email is required');
    } else if (!isValidEmail(emailValue)) {
        setError(email, 'Provide a valid email address');
    } else {
        setSuccess(email);
    }

    if(passwordValue === '') {
        setError(password, 'Password is required');
    } else if (passwordValue.length < 8 ) {
        setError(password, 'Password must be at least 8 character.')
    } else {
        setSuccess(password);
    }

    if(password2Value === '') {
        setError(password2, 'Please confirm your password');
    } else if (password2Value !== passwordValue) {
        setError(password2, "Passwords doesn't match");
    } else {
        setSuccess(password2);
    }

};












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
