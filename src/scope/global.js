//variables
var a; // declarar
a = 1; // asignar
var b = 2; // declaracion y asignacion 
b = 3; //reasignacion
var b = 4; // redeclarecion

//Global scope
var fruit = "apple";
function bestFruit() {
    console.log(fruit);
}
bestFruit();
console.log(fruit) 

function countries() {
    country = "colombia"; // variable global si no la declaramos
    console.log(country);
}

countries();
console.log(country) 