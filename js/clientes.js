// ****** Menu Hamburguesa ****** //

const menu = document.getElementById("menu");
const menuCel = document.getElementById("menuCel");

menu.addEventListener("click", () => {
    menuCel.classList.toggle("menushow");
})

// Formulario tomar datos.
const formulario = document.getElementById("formulario");

document.addEventListener("DOMContentLoaded", () => {
    formulario.addEventListener("submit", buscarCredito);
});

function buscarCredito(e) {
    e.preventDefault();

    const name = document.getElementById("name").value;
    const pasword = Number(document.getElementById("pasword").value)

    // Alerta
    if (name === "" || pasword === "") {
        mensajeAlerta("Todos los campos son obligatorios", "error");
    } else {
        mensajeAlerta("Datos ingresados correctamente...");
    };

    setTimeout(() => {
        // Clave de ingreso
        if (name === "emilse" && pasword === 316) {
            emilse.forEach((listado) => {
                mostrarCredito(listado, name);
            });

        } else if (name === "fernando" && pasword === 415) {
            fernando.forEach((listado) => {
                mostrarCredito(listado, name);
            });

        } else if(name === "vecinos" && pasword === 101) {
            vecinos.forEach((listado) => {
                mostrarCredito(listado, name);
            });

        } else if(name === "guillermo" && pasword === 118) {
            guillermo.forEach((listado) => {
                mostrarCredito(listado, name);
            });

        } else if(name === "amelia" && pasword === 102) {
            amelia.forEach((listado) => {
                mostrarCredito(listado, name);
            });

        } else if(name === "eva" && pasword === 126) {
            eva.forEach((listado) => {
                mostrarCredito(listado, name);
            });
            
        } else if(name === "mirta" && pasword === 223) {
            mirta.forEach((listado) => {
                mostrarCredito(listado, name);
            });

        } else if(name === "melisa" && pasword === 219) {
            melisa.forEach((listado) => {
                mostrarCredito(listado, name);
            });

        } else if(name === "viviana" && pasword === 313) {
            viviana.forEach((listado) => {
                mostrarCredito(listado, name);
            });

        } else if(name === "jorge" && pasword === 300) {
            jorge.forEach((listado) => {
                mostrarCredito(listado, name);
            });

        } else if(name === "carlos" && pasword === 423) {
            carlos.forEach((listado) => {
                mostrarCredito(listado, name);
            });

        } else if(name === "rossana" && pasword === 416) {
            rossana.forEach((listado) => {
                mostrarCredito(listado, name);
            });

        } else if(name === "cristina" && pasword === 419) {
            cristina.forEach((listado) => {
                mostrarCredito(listado, name);
            });
            
        } else if(name === "emanuel" && pasword === 400) {
            emanuel.forEach((listado) => {
                mostrarCredito(listado, name);
            });
        };
    }, 3000);
};

const tablas = document.getElementById("tablas");

function mostrarCredito(listado, name) {

    nombreDelCliente(name);

    const { fecha, tipo, credito, haber, saldo } = listado;

    const tr = document.createElement("tr");

    tr.classList.add("contendioTablas");
    tr.innerHTML = `
        <td class="dia">${fecha}</td>
        <td class="accion">${tipo}</td>
        <td class="credito">${credito}</td>
        <td class="haber">${haber}</td>
        <td class="saldo">${saldo}</td>
    `;
    tablas.appendChild(tr);
};

function nombreDelCliente(name) {
    const nameCliente = document.getElementById("nameCliente");
    nameCliente.innerText = name;
};

function mensajeAlerta(alerta, tipo) {
    const mensaje = document.getElementById("mensaje");

    const texto = document.createElement("p");

    if (tipo === "error") {
        texto.classList.add("error")
    } else {
        texto.classList.add("correcto")
        spinner();
    }

    texto.textContent = alerta;

    mensaje.appendChild(texto);

    setTimeout(() => {
        texto.remove();
    }, 3000);
};

function spinner() {
    const resultado = document.getElementById("resultado");

    resultado.innerHTML= "";

    const divSpinner = document.createElement("div");
    divSpinner.classList.add("sk-fading-circle");

    divSpinner.innerHTML = `
        <div class="sk-circle1 sk-circle"></div>
        <div class="sk-circle2 sk-circle"></div>
        <div class="sk-circle3 sk-circle"></div>
        <div class="sk-circle4 sk-circle"></div>
        <div class="sk-circle5 sk-circle"></div>
        <div class="sk-circle6 sk-circle"></div>
        <div class="sk-circle7 sk-circle"></div>
        <div class="sk-circle8 sk-circle"></div>
        <div class="sk-circle9 sk-circle"></div>
        <div class="sk-circle10 sk-circle"></div>
        <div class="sk-circle11 sk-circle"></div>
        <div class="sk-circle12 sk-circle"></div>
    `;

    resultado.appendChild(divSpinner);

    setTimeout(() => {
        divSpinner.remove();
    },3000);
};