//no se ejecuta ???wthoooo
function noParesDeContarImparesHasta(numero){
    // Escribe aqui tu código
     let esImpar = null;
    for (let i = 1; i = numero; i++){
        let evaluaNum= numero % 2;
       // evaluaNum != 0 ? esImpar + 1 : ' ';
       if (evaluaNum != 0){
         esImpar = esImpar + 1 ;
       } ;
    };
    return esImpar;
}
console.log(noParesDeContarImparesHasta(9));