


function calculateTotal () {
  const format = (num, decimals) => num.toLocaleString('en-US', {
   minimumFractionDigits: 2,
   maximumFractionDigits: 2,
});
  let billAmount = document.querySelector('#bill-amount').value;
  let percent = document.querySelector('#tip-percent').value;
  let totalGuest = document.querySelector('#number-of-people').value;
  //let tipAmount = (billAmount * (percent / 100));
  let tipAmount = (billAmount * (percent * .01));
  let totalBill = (+billAmount + +tipAmount);
  let splitAmount = (totalBill / totalGuest);



  console.log(billAmount);
  console.log(percent);
  console.log(totalGuest);
  console.log(tipAmount);
  console.log(totalBill);
  console.log(splitAmount);
}
