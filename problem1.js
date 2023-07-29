// Two Items calculator

/*  Program with simple variable */

// var totalAmount = 500;
// var orages1Kg = 210;
// var apples1Kg = 180;
// var returnMoney = totalAmount - orages1Kg - apples1Kg;
// console.log(returnMoney)

/*  Program with simple js user input method */

// var totalAmount = parseInt(prompt('Enter your total amount'));
// var item1Price = parseInt(prompt('Enter your First Item price'));
// var item2Price =  parseInt(prompt('Enter your Second Item price'));

// var calculate = totalAmount - item1Price - item2Price;
// document.getElementById('calculator').innerHTML = `Your total amount is = ${totalAmount}TK <br>
// and First Item price is = ${item1Price}TK <br> and Second Item price is = ${item2Price}TK <br> 
// So shopkeeper will return you = ${calculate}TK`;

/*  Program with simple a function */
// user input
var totalAmount = parseInt(prompt('Enter your total amount'));
var item1Price = parseInt(prompt('Enter your First Item price'));
var item2Price =  parseInt(prompt('Enter your Second Item price'));
// function defined
function shopCalculator (totalAmount, item1Price, item2Price) {
    return totalAmount - item1Price - item2Price;
}
// Function arguments
var result = shopCalculator(totalAmount, item1Price, item2Price);
// Output
document.getElementById('calculator').innerHTML = `Your total amount is = ${totalAmount}TK <br>
and First Item price is = ${item1Price}TK <br> and Second Item price is = ${item2Price}TK <br> 
So shopkeeper will return you = ${result}TK`;
