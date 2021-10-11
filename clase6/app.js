// Leer parametro de consola nodejs
let accion = process.argv[2];

let tareas = [
  {
    titulo: 'Repasar JS',
    estado: 'terminado',
  },
  {
    titulo: 'Armar aplicacion de tareas',
    estado: 'pendiente',
  },
  {
    titulo: 'Realizar mico-desafio',
    estado: 'en progreso',
  },
];

switch (accion) {
  case 'listar':
    console.log('Listado de tareas');
    console.log('---------------------');

    // Ciclo para listar las tareas
   for (let i =0; i <= tareas.length; i++){
       con
   } 

    break;
    case: 'filtrar': 
    const accion3 = {
        titulo: process.argv[4],
        estado: 'Filtrado con el estado: ' + process.argv[4]
    }

    let tareaFiltrada = tareas.filter{estado: accion3};
    console.log('Estado de la tarea: ' + accion3());
    
  default:
    console.log('No entiendo qué me estás pidiendo');
    break;
}
