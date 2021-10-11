let edades = [22,8,17,13,30];
let mayores = edades.filter(function (edad){
    return edad > 18;
});
console.log(mayores);