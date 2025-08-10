// 1. Un programa que pida un número y diga si es positivo o negativo.
//  El cero se considera positivo
const number = -10;

if (number >= 0) {
  console.log("Es un número positivo");
} else {
  console.log("Es un número negativo");
}

// 2 Este script pide al usuario que teclee una letra entre
//  A, B, C, D. Si pulsa la letra A en mayúscula o en minúscula
//   le dará el mensaje de que ha acertado,
//    en caso contrario le dirá que se equivocó.

const letter = "b";

if (letter === "A" || letter === "a") {
  console.log("Acertaste");
} else if (letter !== "B" && letter !== "C" && letter !== "D") {
  console.log("Ingrese una letra válida");
} else {
  console.log("te equivocaste");
}

// Este programa te ayuda a viajar. El programa pide
//  al usuario si va a viajar con coche, tren,
//   bicicleta o autobús. Si va en tren o autobús le recordará
//   que lleve dinero para el billete.

const movil = "autobús";

if (movil === "tren" || movil === "autobús") {
  console.log("Recuerda llevar dinero");
}
