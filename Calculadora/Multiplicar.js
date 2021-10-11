function multiplicar (numero1, numero2){
    const RESULT = numero1 * numero2;

    if (numero1==0 || numero2==0){
        return 0;
    }
        return RESULT; // Se puede evitar el else ya que si no se cumple el if, 
                      // pasaria directamente al return para terminar la ejecucion de la funcion.
}
module.exports = multiplicar;