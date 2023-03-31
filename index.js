// participante 1
let nombre;
let apellido;
let dni;
let edad;
let sexo;
let kilometros;
let categoria;

let sexoconf1 = false;
let km = 0;
let verificacion1;
let verif1 = 0;
let anadirpersona;
const arrayParticipantes = [];
let sexos;

// participante 2
let sexoconf2 = false;
let verificacion2;
let verif2 = 0;


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
        Kilometraje: ${km}km`
  );

}


// Creamos participante 1
const participante1 = new Participante(
  nombre = prompt("Ingrese su nombre"),
  apellido = prompt("Ingrese su apellido"),
  dni = prompt("Ingrese su DNI"),
  edad = parseInt(prompt("Ingrese su edad (sólo números)")),
  sexo = prompt("Ingrese su sexo: femenino o masculino"),
  kilometros = prompt(
    "Ingrese el kilometraje que va a hacer: 43km, 65km o 95km"
  )
)
arrayParticipantes.push(participante1);

// Corroboramos que toda la informacion este bien
while (sexoconf1 === false) {
  if (participante1.sexo.toLowerCase() === "femenino") {
    sexoconf1 = 1;
  } else if (participante1.sexo.toLowerCase() === "masculino") {
    sexoconf1 = 2;
  } else {
    participante1.sexo = prompt("Ingrese el sexo nuevamente");
    sexoconf1 = false;
  }
}

while (km === 0) {
  if (
    participante1.kilometros === "43km" ||
    participante1.kilometros === 43 ||
    participante1.kilometros === "43"
  ) {
    km = 43;
  } else if (
    participante1.kilometros === "65km" ||
    participante1.kilometros === 65 ||
    participante1.kilometros === "65"
  ) {
    km = 65;
  } else if (
    participante1.kilometros === "95km" ||
    participante1.kilometros === 95 ||
    participante1.kilometros === "95"
  ) {
    km = 95;
  } else {
    km = 0;

    participante1.kilometros = prompt(
      "Ingrese el kilimetraje que va a hacer: 43km, 65km o 95km"
    );
  }

  console.log(km);
}

if (participante1.edad < 10 || participante1.edad > 85) {
  alert("Usted no puede participar porque no cumple con la edad requerida.");
} else {
  mostrarInformacionParticipante(participante1);

  verificacion1 = prompt("Ingrese SI o NO:");
}

do {
  if (verificacion1.toLowerCase() === "si") {
    verif1 = 1;

    if (km === 95) {
      // Añadimos otro participante en caso de que así lo desee el usuario
      anadirpersona = prompt("¿Desea correr en dupla? Escriba SI o NO");

      switch (anadirpersona.toLowerCase()) {
        // Creamos participante 2 y corroboramos que toda la informacion este bien
        case "si":
          
          const participante2 = new Participante(
            nombre = prompt("Ingrese su nombre"),
            apellido = prompt("Ingrese su apellido"),
            dni = prompt("Ingrese su DNI"),
            edad = parseInt(prompt("Ingrese su edad (sólo números)")),
            sexo = prompt("Ingrese su sexo: femenino o masculino"),
        
          )
          arrayParticipantes.push(participante2);

          while (sexoconf2 === false) {
            if (participante2.sexo.toLowerCase() === "femenino") {
              sexoconf2 = 1;
            } else if (participante2.sexo.toLowerCase() === "masculino") {
              sexoconf2 = 2;
            } else {
              participante2.sexo = prompt("Ingrese el sexo nuevamente");
              sexoconf2 = false;
            }
          }

          if (participante2.edad < 10 || participante2.edad > 85) {
            alert(
              "Usted no puede participar porque no cumple con la edad requerida."
            );
          } else {
            mostrarInformacionParticipante(participante2);

            verificacion2 = prompt("Ingrese SI o NO:");
          }

          do {
            if (verificacion2.toLowerCase() === "si") {
              categoriaDuplas();
              alert(
                `¡Gracias! ${participante1.nombre} ${participante1.apellido} y ${participante2.nombre} ${participante2.apellido}. Ustedes han sido inscriptos en la categoria ${categoria} ${km}km`
              );
              verif2 = 1;
            } else if (verificacion2.toLowerCase() === "no") {
              alert("Por favor vuelva a ingresar sus datos");
              mostrarInformacionParticipante(participante2);
              verificacion2 = prompt("Ingrese SI o NO:");
            }
          } while (verif2 === 0);

          break;

        case "no":
          categoriaSimple();
          alert(
            `¡Gracias! ${participante1.nombre} ${participante1.apellido}. Usted ha sido inscripto en la categoria ${categoria} ${km}km`
          );
          break;

        default:
          do {
            anadirpersona = prompt(
              "Desea añadir otro participante? Escriba SI o NO"
            );
          } while (
            anadirpersona.toLowerCase() != "si" &&
            anadirpersona.toLowerCase() != "no"
          );
          break;
      }
    } else if (km === 43 || km === 65) {
      categoriaSimple();
      alert(
        `¡Gracias! ${participante1.nombre} ${participante1.apellido}. Usted ha sido inscripto en la categoria ${categoria} ${km}km`
      );
    }
  } else if (verificacion1.toLowerCase() === "no") {
    alert("Por favor vuelva a ingresar sus datos");
    mostrarInformacionParticipante(participante1);
    verificacion1 = prompt("Ingrese SI o NO:");
  }
} while (verif1 === 0);

// Se busca la categoria en el caso de que el participante corra solo
function categoriaSimple() {
  switch (km) {
    case 43:
      switch (sexoconf1) {
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
      switch (sexoconf1) {
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
      switch (sexoconf1) {
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
  const resultado = arrayParticipantes[0].edad + arrayParticipantes[1].edad;

  return resultado;
}

function categoriaDuplas() {
  if (
    arrayParticipantes[0].sexo === "femenino" &&
    arrayParticipantes[1].sexo === "femenino"
  ) {
    sexos = 1;
  } else if (
    arrayParticipantes[0].sexo === "masculino" &&
    arrayParticipantes[1].sexo === "masculino"
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
