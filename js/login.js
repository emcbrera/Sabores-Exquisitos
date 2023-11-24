const usuarios = [
    {
        usuario: "user1@gmail.com",
        contrasena: "Cabrera01"
    },

    {
        usuario: "user2@gmail.com",
        contrasena: "Mariana02"
    },

    {
        usuario: "user3@gmail.com",
        contrasena: "Usuario03"
    }
];

//VALIDAR CORREO
const msm = document.getElementById("msm");
function validarCorreo(email) {
    let mensajeCorreo = "";
    let valCorreo = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;

    if (!valCorreo.test(email)) {
        mensajeCorreo = "¡ERROR! DEBE INGRESAR UN USUARIO VALIDO"
    }

    if (email == "") {
        mensajeCorreo = "DEBE LLENAR TODOS LOS CAMPOS, POR FAVOR INGRESE UN USUARIO";
    }

    return mensajeCorreo;
}

//VALIDAR CONTRASEÑA
function validarContrasena(password) {

    let mensajeContrasena = "";

    if (password == "") {
        mensajeContrasena = "DEBE LLENAR TODOS LOS CAMPOS, POR FAVOR INGRESE UNA CONTRASEÑA";
    } else
        if (password.length < 8) {
            mensajeContrasena = "LA CONTRASEÑA DEBE TENER AL MENOS 8 CARACTERES";
        } else
            if (!(/[A-Z]/.test(password))) {
                mensajeContrasena = "LA CONTRASEÑA DEBE TENER AL MENOS UNA MAYUSCULA";
            } else
                if (!(/[a-z]/.test(password))) {
                    mensajeContrasena = "LA CONTRASEÑA DEBE TENER AL MENOS UNA MINUSCULA";
                } else
                    if (!(/\d{2}/.test(password))) {
                        mensajeContrasena = "LA CONTRASEÑA DEBE TENER AL MENOS 2 NUMEROS";
                    }
    return mensajeContrasena;
}

//VALIDAR USUARIO

function validarUsuario(email, password) {

    let mensaje = "";

    for (let i = 0; i < usuarios.length; i++) {
        if (email == usuarios[i].usuario && password == usuarios[i].contrasena){
            break;
        } else
            mensaje = " EL USUARIO NO ES VALIDO, DEBE INGRESAR UN USUARIO Y UNA CONTRASEÑA CORRECTA";
    }
    return mensaje;
}

function promesaLogin() {

    msm.innerHTML = "CARGANDO...";
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("INICIO DE SESION EXITOSO");

        }, 2000);
    });
}

function ingresar() {
    const email = document.getElementById("user").value;
    const password = document.getElementById("password").value;
    const mensajeCorreo = validarCorreo(email);
    const mensajeContrasena = validarContrasena(password);
    const mensajeUsuario = validarUsuario(email, password);

    const mensajeFinal = mensajeCorreo || mensajeContrasena || mensajeUsuario;

    if (mensajeFinal) {
        document.getElementById("msm").innerHTML = mensajeFinal;
        return
    } 
            
    if ((email === usuarios[0].usuario && password === usuarios[0].contrasena) ||
    (email === usuarios[1].usuario && password === usuarios[1].contrasena) ||
    (email === usuarios[2].usuario && password === usuarios[2].contrasena)) {
        promesaLogin().then((mensajeExito) => {
            document.getElementById("msm").innerHTML = mensajeExito;
            window.location.href = "vistatwo.html";
        }).catch((error) => {
            console.error(error);
        });
    }
}

function clean() {
    document.getElementById("user").value = "";
    document.getElementById("password").value = "";
    msm.innerHTML = "";
}