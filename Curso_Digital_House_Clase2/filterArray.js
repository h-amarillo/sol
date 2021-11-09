let estudiantes = [
    {nombre: 'John', promedio: 8.5, aprobado: true},
    {nombre: 'Jane', promedio: 7, aprobado: true},
    {nombre: 'June', promedio: 3, aprobado: false},
]
let aprobados = estudiantes.filter(function (siPasa){
      return  siPasa.promedio >5;     // siPasa es una variable que guarda temporalmente un elemento del array según el índice por el que esté pasadno. Es decir que el parámetro de siPasa está e constante cambio, sin embargo en l momento que su valor es el de un indice este lo podemos m,anipular. Es por ersto que siPasa será un objeto del array el cual tiene es u interior el estado "promedio.". por esto es posible esta linea de codigo. 
});
console.log(aprobados);
let desaprobados = estudiantes.filter(function (noPasa){
    return  noPasa.promedio < 5;
});
console.log(desaprobados);

   