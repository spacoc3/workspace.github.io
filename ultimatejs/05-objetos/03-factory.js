// nos permiten crear objetos de manera sencilla y no repetitiva
//let user = {
//    id: 1,
//    email: 'sam@holamundo.io',
//    name: 'sam',
//    activo: true,
//    recuperarClave: function() { 
//        console.log('recuperando //clave...');
//    },
//
//};

//let user1 = {
//    id: 1,
//    email: 'sam@holamundo.io',
//    name: 'pan',
//    activo: false,
//    recuperarClave: function() { 
//        console.log('recuperando //clave...');
//    },
//
//};
// repetitivo
function crearUsuario(name, email) {
    
    return{
        email,
        name,
        activo: true,
        recuperarClave: function() { 
            console.log('recuperando clave...');
        },
    
    };
    
}
// para nosotroa poder utilizar esta funcion y as poder crear objetos de usuario....hacemos lo siguiente

let user1 = crearUsuario('sam','sam@holamundo.io');
let user2 = crearUsuario('sam2','sam2@holamundo.io');

console.log(user1, user2);