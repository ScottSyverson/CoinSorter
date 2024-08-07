
let pennies = 103;
let penniesRoll = 0;
let penniesValue = pennies * .01;
let penniesRollValue = penniesRoll * .50;
let totalPenniesValue = penniesRollValue + penniesValue;

let nickels = 103;
let nickelsRoll = 0;
let nickelsValue = nickels * .05;
let nickelsRollValue = nickelsRoll * 2;
let totalNickelsValue = nickelsRollValue + nickelsValue;

let dimes = 103;
let dimesRoll = 0;
let dimesValue = dimes * .1;
let dimesRollValue = dimesRoll * 5;
let totalDimesValue = dimesRollValue + dimesValue;

let quarters = 103;
let quartersRoll = 0;
let quartersValue = quarters * .25;
let quartersRollValue = quartersRoll * 10;
let totalQuartersValue = quartersRollValue + quartersValue;

let totalChange = totalPenniesValue + totalNickelsValue + totalDimesValue + totalQuartersValue;

while (pennies > 50){
    pennies = pennies -50;
    penniesRoll ++;
}
console.log(pennies + " unrolled pennies.");
console.log(penniesRoll + " rolls of pennies." );
console.log("Dollar amount of pennies: " + totalPenniesValue);

while (nickels > 40){
    nickels = nickels -40;
    nickelsRoll ++;
}
console.log(nickels + " unrolled nickels.");
console.log(nickelsRoll + " rolls of nickels." );
console.log("Dollar amount of nickels: " + totalNickelsValue);

while (dimes > 50){
    dimes = dimes -50;
    dimesRoll ++;
}
console.log(dimes + " unrolled dimes.");
console.log(dimesRoll + " rolls of dimes." );
console.log("Dollar amount of dimes: " + totalDimesValue);

while (quarters > 50){
    quarters = quarters -40;
    quartersRoll ++;
}
console.log(quarters + " unrolled quarters.");
console.log(quartersRoll + " rolls of quarters." );
console.log("Dollar amount of quarters: " + totalQuartersValue);

console.log("Total coin amount: " + totalChange.toFixed(2));

