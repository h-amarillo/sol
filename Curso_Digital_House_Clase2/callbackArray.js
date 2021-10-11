
function agregarHttp(url) {
    let urlCompletas = 'http://' + url;
    return urlCompletas;
    // escribí tu código aquí
}
let paginas = [ ];
function procesar(paginas, agregarHttp){
    var nuevoArray=[];

    for (let i = 0; i < paginas.length;  i++ ){
        let indiceArray = paginas[i];
        let nuevoUrl = agregarHttp(indiceArray);
        nuevoArray.push(nuevoUrl);
        //let nuevoArray = agregarHttp(indiceArray); este metiodo no me per,ite tener un urla completo en cada indice, solo estaria cambiando el valor de la variable segun el cilo for. 
        //  return nuevoArray; este array devuelve el valor de la variable en un solo ciclo del for
        //console.log(nuevoArray); si estribo esta linea estare repitiendo la accion de mostrar por consola el valor de nuevo array.
    }
        return nuevoArray; // ESTE RETURN le devuelve el valor de la variable nuevoArray a la funcion que posteriormente el resultado será mostrado por consola al final de la funcion. 
    
}
console.log(procesar(['www.google.com', 'www.yahoo.com'],agregarHttp));