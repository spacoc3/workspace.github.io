//function cualEsMayor(a,b) {
//    if (a  > b) {
//        return a;   
//    }
//    else{
//        return b;
//    }
//}

// o tambien se puede realizar de la siguiente manera con un ternario
function cualEsMayor(a, b) {
    return (a > b) ? a : b;    
}
let mayor = cualEsMayor(10, 5);


console.log(mayor);