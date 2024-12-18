//esto llama al constructor de objetos Object()
let obj = {};
let obj2 = new Object();

/**
 * new Array (); []
 * new String (); "" '' ´´
 * new Number (); 12
 * new Boolean (); true false
 */

function Usuario() {
    this.name = "samuel"
}
let user = new Usuario();

console.log(user.constructor);

const s1 = "1 + 1";
const s2 = new String("1 + 1");

console.log(evale(a1), eval(s2));
// si cramos lso string con el constructor y posteriormente necesiatamos saber su valor podemos utilizar el metodo...
console.log(s2.valueOf());