
// function moneyBox(coins) {
//     let saveCoins=0;
//     saveCoins += coins
//     console.log(`MoneyBox $${saveCoins}`)
// }
function moneyBox() {
    let saveCoins=0;
    return function countCoins (coins) {
        saveCoins += coins
        console.log(`MoneyBox $${saveCoins}`)
    }
}
const myMoney = moneyBox();
myMoney(5)
myMoney(6)

const juanMoney = moneyBox();
juanMoney(3)
juanMoney(2)