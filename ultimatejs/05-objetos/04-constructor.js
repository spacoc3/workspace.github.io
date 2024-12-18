// se inicia con mayuscula PORQUE se usa UpperCamelCase al ser una funcion constructora

//{id:1, recuperarClave: function(){}}
function Usuario(params) {
    this.id = 1;
    this.recuperarClave = function () {
        console.log('recuperando clave...');// estas se dejan de llamar funciones y pasan a llamarse metodos que son funciones que fueron agregadas a propiedades de un objeto
    }
}


let usuario = new Usuario();

console.log(usuario);