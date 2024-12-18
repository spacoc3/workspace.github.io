//añadiendo parametros
function suma(a, b) 
{
    console.log(arguments);
    return a + b;
    
}
let resultado= suma(5, 6, 1, 2, 3);// el valor dentro de los parentesis es llamado argumento
console.log(resultado);
console.log(typeof suma);
