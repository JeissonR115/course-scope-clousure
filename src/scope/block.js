function fruits() {
    if (true) {
        var fruit1 = "Apple";
        let fruit2 = "Kiwi";
        const fruit3 = "Banana";
    }
    console.log(fruit1); // funcion scope
    // ReferenceError: fruit# is not defined
    console.log(fruit2); // block scope 
    console.log(fruit3); //block scope
}
fruits();

// Block es todo lo que este enserrado entre llaves ( {} )