// blance control
document.getElementById("depo_btn").addEventListener("click", function () {
  //   console.log("depo btn click");
  const Depoamount = document.getElementById("depo_amount");
  const getDepoamount = Depoamount.value;
  const getDepoValue = Number(getDepoamount);
  Depoamount.value = "";

  const prev_amount = document.getElementById("total_depo");
  const amount = prev_amount.innerText;
  const getamount = Number(amount);
  //   console.log(getamount);
  const updateDepo = getDepoValue + getamount;
  prev_amount.innerText = updateDepo;
  //   console.log(updateDepo);

  const totalBal = document.getElementById("total_blance");
  const getBal = totalBal.innerText;
  const getTotal = Number(getBal);
  //   console.log(getTotal);
  const update_total = getDepoValue + getTotal;

  totalBal.innerText = update_total;
});

// withdraw blance
document.getElementById("withdraw_btn").addEventListener("click", function () {
  //   console.log("depo btn click");
  const withdraw_amount = document.getElementById("withdraw_amount");
  const getWithdraw = withdraw_amount.value;
  const getAmount = Number(getWithdraw);
  withdraw_amount.value = "";

  const prev_total = document.getElementById("total_withdraw");
  const getWithdraw_value = prev_total.innerText;
  const getWithdraw_amount = Number(getWithdraw_value);
  //   console.log(getWithdraw_amount);
  const updateWithdraw = getAmount + getWithdraw_amount;
  prev_total.innerText = updateWithdraw;
  //   console.log(updateDepo);

  const totalBal = document.getElementById("total_blance");
  const getBal = totalBal.innerText;
  const getTotal = Number(getBal);
  //   console.log(getTotal);
  const update_total = getTotal - getAmount;

  totalBal.innerText = update_total;
});
