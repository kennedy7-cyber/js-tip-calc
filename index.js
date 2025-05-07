function calculate() {
  let bill = document.getElementById("bill-amount").value;
  let tip = document.getElementById("tip-percentage").value;
  const tipTotal = (tip / 100) * bill;
  const totalAmount = Number(bill) + Number(tipTotal);
  return document.getElementById("total").innerText = `${totalAmount}.00`;
}
