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

// Escriba un código que pueda calificar a los estudiantes de acuerdo con sus puntajes:

// 80-100, A
// 70-89, B
// 60-69, C
// 50-59, D
// 0-49, F

const nota = 10

if (nota >= 80 && nota <= 100) {
  console.log("A")
} else if (nota >= 70 && nota <=79 ) {
  console.log("B")
} else if (nota >=60 && nota <=69) {
  console.log("C")
} else if (nota >=50 && nota<=59) {
  console.log("D")
} else if (nota<=49) {
  console.log("F")
}

// Consulta si la temporada es Otoño, Invierno, Primavera o Verano. Si la entrada del usuario es :

// Septiembre, Octubre o Noviembre, la temporada es Otoño.
// Diciembre, Enero o Febrero, la temporada es Invierno.
// Marzo, Abril o Mayo, la temporada es Primavera
// Junio, Julio o Agosto, la temporada es Verano

const mes = "Agosto"
if (mes === "Septiembre" || mes === "Octubre" || mes === "Noviembre"){
  console.log("La temporada es Otoño")
} else if (mes === "Diciembre" || mes === "Enero" || mes === "Febrero"){
  console.log("La temporada es Invierno")
} else if (mes === "Marzo" || mes === "Abril" || mes === "Mayo"){
  console.log("La temporada es Primavera")
} else if (mes === "Junio" || mes === "Julio" || mes === "Agosto"){
  console.log("La temporada es Verano")
}

//Escribe un programa que si el usuario ingresa per, calcule el perímetro del triángulo
//o del cuadrado
// y si ingresa h calcule el área del cuadrado o del triángulo

const perimetroArea = "h"
const figura = "triángulo"
const lado = 3
const baseTriangulo  = 4
const alturaTriangulo = 5
const perimetroTriangulo = lado * 3
const perimetroCuadrado = lado * 4
const areaCuadrado = lado * lado
const areaTriangulo = (baseTriangulo * alturaTriangulo) / 2

if (perimetroArea === "h" && figura === "triángulo") {
  console.log ("El área del triángulo es: " + areaTriangulo)
} else if (perimetroArea === "h" && figura === "cuadrado") {
  console.log ("El área del cuadrado es: " + areaCuadrado)
} else if (perimetroArea === "per" && figura === "triángulo") {
  console.log ("El perímetro del triángulo es: " + perimetroTriangulo)
} else  if (perimetroArea === "per" && figura === "cuadrado") {
  console.log ("El perímetro del cuadrado es: " + perimetroCuadrado)
}



if (perimetroArea === 'h') {
  if(figura === "triángulo"){
    console.log(`El area del tringualo es ${areaTriangulo}`)
  } else {
    console.log(`El area del cuadrado es ${areaCuadrado}`)
  }
} else {
  if(figura === "triángulo"){
    console.log(`El perimetro del triangulo es ${perimetroTriangulo}`)
  } else {
    console.log(`El perimetro del cuadrado es: ${perimetroCuadrado}`)
  } 
} 


  //Escriba un programa que pida 3 numeros y que escriba si son los tres iguales,
  //si hay dos iguales o si son los  tres distintos


  // Funciones
  // 1. Declare una función fullName e imprima su nombre completo

  function fullName(nombre, apellido) {
   const nombreCompleto = nombre + apellido
   console.log(`Hola, ${nombreCompleto}`)
  }

  fullName("Juan ", "Martínez")


  // 2. Declare una función fullName y ahora toma firstName, lastName 
  // como parámetro y retorna su nombre completo.
function fullName(firstName, lastName) {

}

// 3. Declare una función addNumbers que toma dos parámetros y retorna la suma de ambos.

function addNumbers(a, b) {
  suma = a + b
  console.log(suma)
}

addNumbers(5, 5)

// La velocidad se calcula dividiendo el total de la distancia 
// recorrida por un objeto en movimiento entre el tiempo total.
//  Escribe una función que calcule la velocidad de un objeto en movimiento, speed.

function speed(distance, time) {
  const speedObject = distance / time
  console.log(`La velocidad del objeto es: ${speedObject} m/s`)
}

speed(15, 10)

//El índice de masa corporal (IMC) se calcula de la siguiente
//  manera: imc = peso en Kg / (altura x altura) en m2. Escribe 
// una función que calcule imc. El IMC se utiliza para definir de forma
//  amplia diferentes grupos de peso en adultos de 20 años o más. Compruebe si 
// una persona tiene un peso bajo, peso normal, con sobrepeso u obeso según la 
// información que se proporciona a continuación.
// Se aplican los mismos parámetros de grupos tanto a hombres como a mujeres.
// Peso bajo: IMC inferior a 18,5
// Peso normal: IMC de 18,5 a 24,9
// Sobrepeso: IMC de 25 a 29,9
// Obeso: IMC es 30 o más

function imc(peso, altura) {
  const masaCorporal = peso / (altura * altura)

  if (masaCorporal < 18.5) {
    console.log("Tu peso es bajo")
  } else if(masaCorporal >= 18.5 && masaCorporal <= 24.9) {
    console.log("Tu peso es normal")
  } else if(masaCorporal >= 25 && masaCorporal <=29.9) {
    console.log("Tienes sobrepeso")
  } else {
    console.log("Estás obeso")
  }

}

imc(78, 1.73)
