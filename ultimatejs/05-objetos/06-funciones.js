//la funciones se consideran objetos de primera clase
function Usuario(nombre) {
    this.name = nombre; 
    
}
//accedemos a una propiedad llamada name 
console.log(Usuario.name);

// indica la cantidad de argumentoa que recive una funcion
console.log(Usuario.length);

//tomamos una funcion y la asignamos a una variable
const U = Usuario;
let user = new U('samuel');

console.log(user);

function of(Fn, arg) {
    return new Fn(arg);
}

let user1 = of(Usuario, 'samuel' );
console.log(user1);

function returned(){
    return function(){
        console.log('hola mundo');
    }
}

let saludo = returned();
saludo();
