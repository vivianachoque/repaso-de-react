const arreglo = [1,2,3,4];
let arreglo2 = [...arreglo, 5 ];

console.log ( arreglo );
console.log ( arreglo2 );
//arreglo 2 pushea 1 objeto mas con operado spread ...

const arreglo3 = arreglo2.map( function(numero) {
    return numero * 2;
});

console.log (arreglo3);
