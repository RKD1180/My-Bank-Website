// get input
function getInpuValue(inputValue) {
  const inputFIeld = document.getElementById(inputValue);
  const inputAmountText = inputFIeld.value;
  const getDepoValue = Number(inputAmountText);
  inputFIeld.value = "";

  return getDepoValue;
}

// update total field
function updateTotal(getDepoDieldId, getDepoValue) {
  const prev_amount = document.getElementById(getDepoDieldId);
  const amount = prev_amount.innerText;
  const getamount = Number(amount);
  //   console.log(getamount);
  const updateTotalAmount = getDepoValue + getamount;
  prev_amount.innerText = updateTotalAmount;
  //   console.log(updateTotalAmount);
  return updateTotalAmount;
}

function getMainBal() {
  const totalBal = document.getElementById("total_blance");
  const getBal = totalBal.innerText;
  const getTotal = Number(getBal);
  return getTotal;
}

// update main Blance
function UpdateMainBalance(value, isAdd) {
  const totalBal = document.getElementById("total_blance");
  //   const getBal = totalBal.innerText;
  //   const getTotal = Number(getBal);
  //   console.log(getTotal);
  const getTotal = getMainBal();
  if (isAdd == true) {
    const update_total = value + getTotal;
    totalBal.innerText = update_total;
  } else {
    const update_total = getTotal - value;
    totalBal.innerText = update_total;
  }
}

// blance control
document.getElementById("depo_btn").addEventListener("click", function () {
  //   console.log("depo btn click");
  const getDepoValue = getInpuValue("depo_amount");
  if (getDepoValue > 0) {
    updateTotal("total_depo", getDepoValue);
    UpdateMainBalance(getDepoValue, true);
  }
});

// withdraw blance
document.getElementById("withdraw_btn").addEventListener("click", function () {
  const getAmount = getInpuValue("withdraw_amount");
  const getCurrentBal = getMainBal();
  if (getAmount > 0 && getAmount < getCurrentBal) {
    updateTotal("total_withdraw", getAmount);
    UpdateMainBalance(getAmount, false);
  }
});
