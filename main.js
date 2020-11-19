

// TAKES CARE OF THE DECIMAL (2 SPACES) AND ROUNDING THE NUMBER PROPERLY
function calculateTotal () {
  const format = (num, decimals) => num.toLocaleString('en-US', {
   minimumFractionDigits: 2,
   maximumFractionDigits: 2,
});
  let billAmount = document.querySelector('#bill-amount').value;
  let percent = document.querySelector('#tip-percent').value;
  let totalGuest = document.querySelector('#number-of-people').value;
  // EITHER 2 LINES BELOW TO GET THE PERCENT OF A NUMBER OR VALUE.
  //let tipAmount = (billAmount * (percent / 100));
  let tipAmount = format(billAmount * (percent * .01));
  // ADD THE "+" INFRONT OF THE VARIABLE NAME TO CONVERT IT TO A STRING SO THAT IT WILL ADD THE NUMBERS AND NOT JUST PUT THE TO VALUES NEXT TO ONE ANOTHER.
  let totalBill = format(+billAmount + +tipAmount);
  let splitAmount = format(totalBill / totalGuest);

// OUT PUT VALLUES //
  document.getElementById('tip-amount-results').innerHTML = "$" + tipAmount;
  document.getElementById('total-amount-results').innerHTML = "$" + totalBill;
  document.getElementById('split-amount-results').innerHTML = "$" + splitAmount;

  console.log(billAmount);
  console.log(percent);
  console.log(totalGuest);
  console.log(tipAmount);
  console.log(totalBill);
  console.log(splitAmount);
}
