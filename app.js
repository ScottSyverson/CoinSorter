const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
});

let pennies = 104;
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
console.log(penniesRoll + " rolls of pennies." );
console.log(pennies + " unrolled pennies.");
console.log("Dollar amount of pennies: " + formatter.format(totalPenniesValue));

while (nickels > 40){
    nickels = nickels -40;
    nickelsRoll ++;
}
console.log(nickelsRoll + " rolls of nickels." );
console.log(nickels + " unrolled nickels.");
console.log("Dollar amount of nickels: " + formatter.format(totalNickelsValue));

while (dimes > 50){
    dimes = dimes -50;
    dimesRoll ++;
}
console.log(dimesRoll + " rolls of dimes." );
console.log(dimes + " unrolled dimes.");
console.log("Dollar amount of dimes: " + formatter.format(totalDimesValue));

while (quarters > 40){
    quarters = quarters -40;
    quartersRoll ++;
}
console.log(quartersRoll + " rolls of quarters." );
console.log(quarters + " unrolled quarters.");
console.log("Dollar amount of quarters: " + formatter.format(totalQuartersValue));

console.log("Total coin amount: " + formatter.format(totalChange));

