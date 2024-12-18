/**
 * crear un algoritmo que  devuelva numero menor y mayor de un array
 * 
 * for in devuelve el indice y for of devuelve el valor
 */

let array = [2, 5, 7, 15, -5, -100, 55];
function getMenorMayor(arr) {
    let menor = arr[0];
    let mayor = arr[0];
    for(numero of arr){
        menor = menor < numero ? menor : numero;
        mayor = mayor > numero ? mayor : numero;
    }
    return[menor, mayor];
    
}
let numeros = getMenorMayor(array)
console.log(numeros);
