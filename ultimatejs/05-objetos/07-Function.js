//investiguar como poner backticks
function Punto(x, y) {
    this.x = x;
    this.y = y;
    this.dibujar = function() {console.log('Dibujando...');}
    
}

//const Point = new Function('x', 'y',//`this.x = x;
//    this.y = y;
//    this.dibujar = function() //{console.log('Dibujando...');}`
//);
//
//const p = new Point(1, 2)
//console.log(p);

// esta es la forma mas util y recomendad de hacerlo
let punto = { z:7 };
Punto.call({},1,2);
Punto.apply({},1,2);

console.log(punto);

//nos sirve para extender objetos y tambien para poder extender otras funciones

// call nos sirve para poder llamamr funciones a la cuales se les puede pasar el contexto de this y asi poder aumentar los objetos qu ese le estan pasando  

// apply todo argumento que se le entregue se le tiene que hacer en forma de una array []