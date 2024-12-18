const punto = {
    x:10,
    y:15,
    dibujar: function(){
        console.log('dibujando..')
    }
    // dibujar(){console.log('dibujar');}
    // esa es otra manera de anotar en vez de poner so puntos function
};
delete punto,dibujar;

// otra manera de verificar si una propiedad o metodo se encuentra dentro de un objeto 
if ('dibujar'in punto ) {
    punto.dibujar();
}

// otra instruccion (se lsitan los valores de todas las propiedades de este objeto)

console.log(Object.keys(punto));
for(let llave of Object.keys(punto)){
    console.log(llave, punto[llave]);
}

// forma antigua de realizar el listado 
for(let entry of Object.entries(punto)){
    console.log(entry);
}
// forma de nueva de realizar el listado 
for( let llave in punto ){
    console.log(llave, punto[llave]);
}