let user = {
    id:1,
    name: 'chanchito feliz',
    age: 25,
};

for(let prop in user ){
    console.log(prop, user[prop]);
}

let animales = ['chanchito feliz','dragon','canguro'];
for (let indice in animales){
    console.log(indice, animales[indice]);
}
// lo correcto seria utilizar un for of y asi evitar probleamas futuros