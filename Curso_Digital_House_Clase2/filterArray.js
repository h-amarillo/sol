let estudiantes = [
    {nombre: 'John', promedio: 8.5, aprobado: true},
    {nombre: 'Jane', promedio: 7, aprobado: true},
    {nombre: 'June', promedio: 3, aprobado: false},
]
let aprobados = estudiantes.filter(function (siPasa){
     //console.log(siPasa);
     siPasa
     console.log(estudiantes.promedio);
      return  siPasa;
      
});
console.log(aprobados);
   