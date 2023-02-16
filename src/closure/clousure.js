function greeting() {
    let userName = "JeissonR115";
    function displayUserName() {
        return `Hello ${userName}`;
    }
    return displayUserName;
}
const G = greeting()
console.log(G)
console.log(G())