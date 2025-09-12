const miPrimerArray = [10, 5, 9, 10, 33]


for(let i = 0 ; i < miPrimerArray.length; i++){
    console.log(miPrimerArray[i])
}


/**
 * 1 Encuentra la longitud de tu array.
2 Obtenga el primer elemento, el elemento del medio y el último elemento de un array.
3 Declara un array llamado mixedDataTypes, coloque diferentes tipos de datos en el array
 y encuentre la longitud del array. El tamaño del array debe ser mayor que 5.

 4 Sin usar métodos del objeto array, diseña una función llamada sumaLista() 
 capaz de sumar todos los números que forman el array que se le pase como argumento.

 5 Escribe una función que pueda devolver el valor más pequeño de un array numérico
  o el índice de ese valor. 
  El segundo parámetro de la función dirá si debe devolver el valor ("v") o el índice ("i"). 
  No uses métodos del objeto array.
Se supone que el primer parámetro siempre será una matriz llena con
 al menos 1 número y sin duplicados.
Se suponer el segundo parámetro será una letra con uno de dos valores: 'v' 'i'

 */

const longitudArray = [20,30,40,50,100]
console.log(longitudArray.length)



const elementosArray = [28,2,3,4,5,6,7,8,9,30]
elementoMedio = elementosArray.length / 2
console.log(elementosArray[0])
console.log(elementoMedio)
console.log(elementosArray[elementosArray.length - 1])


function sumaLista(array) {
    let suma = 0;
    for(let i = 0 ; i < array.length ; i++ ){
        suma = suma + array[i]
    }
    console.log(suma)  
}

sumaLista([1,2,3])

// Excelente. 2025/agos/27 😃
function valorMinimo(array, tipoDeRetorno) {
    let minimo = array[0];
    let indice = 0
    for(let i = 0 ; i < array.length ; i++) {
        if(array[i] < minimo){
            minimo = array[i]
            indice = i
        }
    }
    if(tipoDeRetorno === "indice") {
        console.log("El indice del valor minimo es: " + indice)
    } else {
        console.log("El valor minimo es: " + minimo)
    }

}
valorMinimo([10,2,3,-1], "valor");

valorMinimo([10,2,3,-1, 0, 44, -2, 0], "indice");

//Methods

const numeros = [10, 30, 5, 6, 34, 2, -20, 0, 98];


function ronaldinho(n) {
    if(n > 10) {
        return n;
    }
}


const numerosMayoresADiez = numeros.filter(ronaldinho);

console.log(numerosMayoresADiez)


// const filterFunction = (n) => {
//     if(n > 10) {
//         return n;
//     }
// }

// const filterFunction = (n) => n > 10;

// function suma (a, b) {
//     return a +b 
// }


// const suma = (a, b) => a + b;





const numerosMayoresADiezConArrow = numeros.filter();



//Filtrar los números mayores que 50
const numerosMayoresACincuenta = [10, 55, 60, 30, 80, 25]
const mayores = numerosMayoresACincuenta.filter(num => num > 50);

console.log(mayores)

//2. Filtrar nombres que empiecen con la letra "A"
const nombres = ["Ana", "Pedro", "Andrés", "María", "Alberto", "Sofía"];
const empiezanConA = nombres.filter(word => word.startsWith("A")); 
console.log(empiezanConA)
 
