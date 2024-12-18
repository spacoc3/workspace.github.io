// indica al codigo explicitamente donde queremos que este se valla dependiendo del valor de la varible
let accion = 'actualizar';

switch (accion) {
    case 'listar':
        console.log('accion de listar');
        break;
    case 'guadar':
        console.log('accion guardar');
        break;
    default:
        console.log('accion no reconocida')
        break;
}
// la misma accion se puede realizar tambien con else-if