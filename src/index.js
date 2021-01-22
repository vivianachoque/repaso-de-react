//1.Transformar a funcion de flecha
//2. Tiene que retornar un objeto implicito
//3.Prubeas

// function getUsuarioActivo(nombre) {
//     return {
//         uid: 'ABCD34'
//         username: nombre
//     }
// };

const getUsuarioActivo = (nombre) => {
    return {
        uid: 'ABCD34',
        username: nombre,
    }
};

const usuarioActivo = getUsuarioActivo('Viviana');
console.log (usuarioActivo);
