// participante 1
let sexoValidoParticipante1 = false;
let kilometrajeParticipante1 = 0;
let confirmacionDatosParticipante1;
let confirmacionAgregarParticipante1 = 0;
let confirmacionAgregarOtroParticipante;
const participantesRegistrados = [];
let sexos;
let kilometros = 0;

// participante 2
let sexoValidoParticipante2 = false;
let confirmacionDatosParticipante2;
let confirmacionAgregarParticipante2 = 0;


// EVENTOS
window.addEventListener('DOMContentLoaded', function() {
  const event = new Event('cargarContenidoAlDOM');
  document.dispatchEvent(event);
});

document.addEventListener("cargarContenidoAlDOM", function () {
  const nombre = document.querySelector("#nombre");
  const apellido = document.querySelector("#apellido");
  const dni = document.querySelector("#dni");
  const edad = document.querySelector("#edad");
  const sexo = document.querySelector("#sexo");
  const kilometraje = document.querySelector("#kilometraje");

  const titulo = document.querySelector('#titulo');
  titulo.textContent = '¡INSCRIPCIONES 2023!';

  function guardarCambiosNombre(evento) {
    const nombree = evento.target.value;
    localStorage.setItem("nombre", nombree);
  }

  function guardarCambiosApellido(evento) {
    const apellidoo = evento.target.value;
    localStorage.setItem("apellido", apellidoo);
  }

  nombre.addEventListener("input", guardarCambiosNombre);
  apellido.addEventListener("input", guardarCambiosApellido);

  let informacion = JSON.parse(localStorage.getItem("informacion"));

  if (informacion) {
    informacion.apellidoo = inputApellido.value;
    localStorage.setItem("informacion", JSON.stringify(informacion));
    console.log("Información actualizada en localStorage.");
  } else {
    console.log("Información no encontrada en localStorage.");
  }

});





// Clase para crear los participantes
class Participante {
  constructor(nombre, apellido, dni, edad, sexo, kilometros, categoria) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.dni = dni;
    this.edad = edad;
    this.sexo = sexo;
    this.kilometros = kilometros;
    this.categoria = categoria;

  }
}


//Funcion para mostrar informacion del participante
function mostrarInformacionParticipante(Participante) {
  alert(
    `¡Gracias!
        Verificá que los datos estén bien:
        Nombre: ${Participante.nombre}
        Apellido: ${Participante.apellido}
        DNI: ${Participante.dni}
        Edad: ${Participante.edad}
        Sexo: ${Participante.sexo}
        Kilometraje: ${kilometrajeParticipante1}km`
  )
}


// Creamos participante 1
const participante1 = new Participante(nombre, apellido, dni, edad, sexo, kilometros);
participantesRegistrados.push(participante1);

// Corroboramos que toda la informacion este bien
while (sexoValidoParticipante1 === false) {
  if (participante1.sexo.toLowerCase() === "femenino") {
    sexoValidoParticipante1 = 1;
  } else if (participante1.sexo.toLowerCase() === "masculino") {
    sexoValidoParticipante1 = 2;
  } else {
    participante1.sexo = prompt("Ingrese el sexo nuevamente");
    sexoValidoParticipante1 = false;
  }
}

while (kilometrajeParticipante1 === 0) {
  if (
    participante1.kilometros === "43km" ||
    participante1.kilometros === 43 ||
    participante1.kilometros === "43"
  ) {
    kilometrajeParticipante1 = 43;
  } else if (
    participante1.kilometros === "65km" ||
    participante1.kilometros === 65 ||
    participante1.kilometros === "65"
  ) {
    kilometrajeParticipante1 = 65;
  } else if (
    participante1.kilometros === "95km" ||
    participante1.kilometros === 95 ||
    participante1.kilometros === "95"
  ) {
    kilometrajeParticipante1 = 95;
  } else {
    kilometrajeParticipante1 = 0;

    participante1.kilometros = prompt(
      "Ingrese el kilimetraje que va a hacer: 43km, 65km o 95km"
    );
  }

  console.log(kilometrajeParticipante1);
}

if (participante1.edad < 10 || participante1.edad > 85) {
  alert("Usted no puede participar porque no cumple con la edad requerida.");
} else {
  mostrarInformacionParticipante(participante1);

  confirmacionDatosParticipante1 = prompt("Ingrese SI o NO:");
}

do {
  if (confirmacionDatosParticipante1.toLowerCase() === "si") {
    confirmacionAgregarParticipante1 = 1;

    if (kilometrajeParticipante1 === 95) {
      // Añadimos otro participante en caso de que así lo desee el usuario
      confirmacionAgregarOtroParticipante = prompt("¿Desea correr en dupla? Escriba SI o NO");
      switch (confirmacionAgregarOtroParticipante.toLowerCase()) {
        // Creamos participante 2 y corroboramos que toda la informacion este bien
        case "si":
          
          const participante2 = new Participante(
            nombre = prompt("Ingrese su nombre"),
            apellido = prompt("Ingrese su apellido"),
            dni = prompt("Ingrese su DNI"),
            edad = parseInt(prompt("Ingrese su edad (sólo números)")),
            sexo = prompt("Ingrese su sexo: femenino o masculino"), 
        
          )
          participantesRegistrados.push(participante2);

          while (sexoValidoParticipante2 === false) {
            if (participante2.sexo.toLowerCase() === "femenino") {
              sexoValidoParticipante2 = 1;
            } else if (participante2.sexo.toLowerCase() === "masculino") {
              sexoValidoParticipante2 = 2;
            } else {
              participante2.sexo = prompt("Ingrese el sexo nuevamente");
              sexoValidoParticipante2 = false;
            }
          }

          if (participante2.edad < 10 || participante2.edad > 85) {
            alert(
              "Usted no puede participar porque no cumple con la edad requerida."
            ); 
          } else {
            mostrarInformacionParticipante(participante2);

            confirmacionDatosParticipante2 = prompt("Ingrese SI o NO:");
          }

          do {
            if (confirmacionDatosParticipante2.toLowerCase() === "si") {
              categoriaDuplas();
            alert(
                `¡Gracias! ${participante1.nombre} ${participante1.apellido} y ${participante2.nombre} ${participante2.apellido}. Ustedes han sido inscriptos en la categoria ${categoria} ${kilometrajeParticipante1}km`
              ); 
              vericonfirmacionAgregarParticipante2 = 1;
            } else if (confirmacionDatosParticipante2.toLowerCase() === "no") {
             alert("Por favor vuelva a ingresar sus datos");
              mostrarInformacionParticipante(participante2);
              confirmacionDatosParticipante2 = prompt("Ingrese SI o NO:");
            }
          } while (vericonfirmacionAgregarParticipante2 === 0);

          break;

        case "no":
          categoriaSimple();
          alert(
            `¡Gracias! ${participante1.nombre} ${participante1.apellido}. Usted ha sido inscripto en la categoria ${categoria} ${kilometrajeParticipante1}km`
          );  
          break;

        default:
          do {
            confirmacionAgregarOtroParticipante = prompt(
              "Desea añadir otro participante? Escriba SI o NO"
            );  
          } while (
            confirmacionAgregarOtroParticipante.toLowerCase() != "si" &&
            confirmacionAgregarOtroParticipante.toLowerCase() != "no"
          );
          break;
      }
    } else if (kilometrajeParticipante1 === 43 || kilometrajeParticipante1 === 65) {
      categoriaSimple();
       alert(
        `¡Gracias! ${participante1.nombre} ${participante1.apellido}. Usted ha sido inscripto en la categoria ${categoria} ${kilometrajeParticipante1}km`
      );
    }
  } else if (confirmacionDatosParticipante1.toLowerCase() === "no") {
    alert("Por favor vuelva a ingresar sus datos");
    participante1 = new Participante(
      nombre = prompt("Ingrese su nombre"),
      apellido = prompt("Ingrese su apellido"),
      dni = prompt("Ingrese su DNI"),
      edad = parseInt(prompt("Ingrese su edad (sólo números)")),
      sexo = prompt("Ingrese su sexo: femenino o masculino"),
      kilometros = prompt(
        "Ingrese el kilometraje que va a hacer: 43km, 65km o 95km"
      ) 
    )
    mostrarInformacionParticipante(participante1);
    confirmacionDatosParticipante1 = prompt("Ingrese SI o NO:");  
  }
} while (confirmacionAgregarParticipante1 === 0);

// Se busca la categoria en el caso de que el participante corra solo
function categoriaSimple() {
  switch (kilometrajeParticipante1) {
    case 43:
      switch (sexoValidoParticipante1) {
        case 1:
          if (participante1.edad <= 16) {
            categoria = "CICLO DAMAS JUVENILES";
          } else if (participante1.edad > 16 && participante1.edad <= 35) {
            categoria = "CICLO DAMAS A";
          } else if (participante1.edad >= 36 && participante1.edad < 45) {
            categoria = "CICLO DAMAS B";
          } else if (participante1.edad >= 46 && participante1.edad < 55) {
            categoria = "CICLO DAMAS C";
          } else if (participante1.edad >= 55 && participante1.edad < 65) {
            categoria = "CICLO DAMAS D";
          } else if (participante1.edad >= 66) {
            categoria = "CICLO DAMAS E";
          }
          break;

        case 2:
          if (participante1.edad <= 16) {
            categoria = "CICLO JUVENIL";
          } else if (participante1.edad > 16 && participante1.edad <= 35) {
            categoria = "CICLOTURISMO A";
          } else if (participante1.edad >= 36 && participante1.edad < 45) {
            categoria = "CICLOTURISMO B";
          } else if (participante1.edad >= 46 && participante1.edad < 55) {
            categoria = "CICLOTURISMO C";
          } else if (participante1.edad >= 55 && participante1.edad < 65) {
            categoria = "CICLOTURISMO D";
          } else if (participante1.edad >= 66) {
            categoria = "CICLOTURISMO E";
          }
          break;
      }
      break;

    case 65:
      switch (sexoValidoParticipante1) {
        case 1:
          if (participante1.edad >= 16 && participante1.edad <= 17) {
            categoria = "DAMAS JUVENILES";
          } else if (participante1.edad > 17 && participante1.edad <= 35) {
            categoria = "DAMAS A";
          } else if (participante1.edad >= 36 && participante1.edad < 45) {
            categoria = "DAMAS B";
          } else if (participante1.edad >= 46 && participante1.edad < 55) {
            categoria = "DAMAS C";
          } else if (participante1.edad >= 55 && participante1.edad < 65) {
            categoria = "DAMAS D";
          } else if (participante1.edad >= 66) {
            categoria = "DAMAS E";
          }
          break;

        case 2:
          if (participante1.edad <= 16) {
            categoria = "JUVENILES";
          } else if (participante1.edad > 16 && participante1.edad <= 35) {
            categoria = "MASTER A";
          } else if (participante1.edad >= 36 && participante1.edad < 45) {
            categoria = "MASTER B";
          } else if (participante1.edad >= 46 && participante1.edad < 55) {
            categoria = "MASTER C";
          } else if (participante1.edad >= 55 && participante1.edad < 65) {
            categoria = "MASTER D";
          } else if (participante1.edad >= 66) {
            categoria = "MASTER E";
          }
          break;
      }
      break;

    case 95:
      switch (sexoValidoParticipante1) {
        case 1:
          if (participante1.edad >= 18 && participante1.edad < 29) {
            categoria = "DAMAS ELITE";
          } else if (participante1.edad >= 30 && participante1.edad < 39) {
            categoria = "DAMAS A";
          } else if (participante1.edad >= 40 && participante1.edad < 49) {
            categoria = "DAMAS B";
          } else if (participante1.edad >= 50 && participante1.edad < 59) {
            categoria = "DAMAS C";
          } else if (participante1.edad >= 60) {
            categoria = "DAMAS D";
          }
          break;

        case 2:
          if (participante1.edad >= 18 && participante1.edad < 23) {
            categoria = "SUB 23";
          } else if (participante1.edad >= 24 && participante1.edad < 29) {
            categoria = "ELITE";
          } else if (participante1.edad >= 30 && participante1.edad < 34) {
            categoria = "MASTER A1";
          } else if (participante1.edad >= 35 && participante1.edad < 39) {
            categoria = "MASTER A2";
          } else if (participante1.edad >= 40 && participante1.edad < 44) {
            categoria = "MASTER B1";
          } else if (participante1.edad >= 45 && participante1.edad < 49) {
            categoria = "MASTER B2";
          } else if (participante1.edad >= 50 && participante1.edad < 54) {
            categoria = "MASTER C1";
          } else if (participante1.edad >= 55 && participante1.edad < 59) {
            categoria = "MASTER C2";
          } else if (participante1.edad >= 60 && participante1.edad < 64) {
            categoria = "MASTER D1";
          } else if (participante1.edad >= 65 && participante1.edad < 69) {
            categoria = "MASTER D2";
          } else if (participante1.edad >= 70) {
            categoria = "MASTER E";
          }
          break;
      }
      break;
  }
}

// Se busca la categoria en el caso de que sea dupla
function sumaEdades() {
  const resultado = participantesRegistrados[0].edad + participantesRegistrados[1].edad;

  return resultado;
}

function categoriaDuplas() {
  if (
    participantesRegistrados[0].sexo === "femenino" &&
    participantesRegistrados[1].sexo === "femenino"
  ) {
    sexos = 1;
  } else if (
    participantesRegistrados[0].sexo === "masculino" &&
    participantesRegistrados[1].sexo === "masculino"
  ) {
    sexos = 2;
  } else {
    sexos = 3;
  }

  switch (sexos) {
    case 1:
      if (sumaEdades() <= 80) {
        categoria = "DUPLAS DAMAS A";
      } else if (sumaEdades() > 80) {
        categoria = "DUPLAS DAMAS B";
      }
      break;

    case 2:
      if (sumaEdades() <= 80) {
        categoria = "DUPLAS VARONES A";
      } else if (sumaEdades() > 80) {
        categoria = "DUPLAS VARONES B";
      }
      break;

    case 3:
      if (sumaEdades() <= 80) {
        categoria = "DUPLAS MIXTA A";
      } else if (sumaEdades() > 80) {
        categoria = "DUPLAS MIXTA B";
      }
      break;
  }
}
 








