//a este objeto se le pueden cambiar todas sus propiedades 
const user = {id: 1};
user. name = 'nicolas';
user.guardar = function () {
    console.log('guardando', user.name);
    
 }

user.guardar();

delete user.name;
delete user.guardar;

console.log(user);
// con la prop freeze hacemos qu al objeto no se le puedan cambiar sus propiedades ni agregarlas
//const user1 = Object.freeze({id : 1});

// con seal  se pueden cambiar los valores de las propiedades qu eya tiene mas no agragar propiedades 
const user1 = Object.seal({id : 1});
user1.name = 'nico';
console.log(user1);