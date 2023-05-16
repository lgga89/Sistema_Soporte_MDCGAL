
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



fomrulario.addEventListener('submit', e => {
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




const validateInputs = () => {
 

    const idValue = id.value.trim();
    const nombreEncargadoValue = nombreEncargado.value.trim();
    const dniValue = dni.value.trim();
    const sedeValue = sede.value.trim();
    const cargoValue = cargo.value.trim();
    const oficinaValue = oficina.value.trim();
    const solicitanteValue = solicitante.value.trim();
    const categoriaValue = categoria.value.trim();
    const codPatriValue = codPatri.value.trim();
    const problematicaValue = problematica.value.trim();
    const fechaValue = fecha.value.trim();


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
    
/*
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
*/

};

