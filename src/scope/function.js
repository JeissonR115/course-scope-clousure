function greeting() {
    let userName = "juan";// variable local (solo existe entre la funcion)
    console.log(userName)
    if(userName === "juan"){
        console.log(`Hello ${userName}!`)
    }
}
greeting();
console.log(userName)//ReferenceError: userName is not defined