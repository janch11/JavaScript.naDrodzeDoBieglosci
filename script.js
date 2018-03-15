const TAX = 0.08 ;
const PHONE_PRICE = 99.99;
const CASE_PRICE =  9.99;
const LIMIT = 200;

var pocket = prompt("How many money do you have?");

var priceWithTax = PHONE_PRICE+PHONE_PRICE*TAX;
var caseWithTax = CASE_PRICE+CASE_PRICE*TAX;
var finalPrice;
finalPrice = caseWithTax + priceWithTax;

if (finalPrice > LIMIT){
finalPrice = priceWithTax;
}
else {
    finalPrice = caseWithTax + priceWithTax;
}
while (finalPrice < pocket) {
    pocket = pocket - finalPrice;
}
alert(finalPrice);
alert(pocket);


