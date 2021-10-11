function dividir (numero1, numero2){
    const RESULT = numero1 / numero2;
    if (numero1==0 || numero2==0){
        return "No es posible realizar la operación";
    };
    return RESULT;
}
module.exports = dividir;