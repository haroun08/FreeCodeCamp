const currencyUnit = {
  "PENNY": 0.01,
  "NICKEL": 0.05,
  "DIME": 0.1,
  "QUARTER": 0.25,
  "ONE": 1,
  "FIVE": 5,
  "TEN": 10,
  "TWENTY": 20,
  "ONE HUNDRED": 100
}

function checkCashRegister(price, cash, cid) {
  let changeDue = cash - price;
  let change = [];
  let status = '';

  let totalCid = cid.reduce((total, [, amount]) => total + amount, 0);

  if (totalCid < changeDue) {
    status = 'INSUFFICIENT_FUNDS';
  } else if (totalCid === changeDue) {
    status = 'CLOSED';
    change = cid;
  } else {
    for (let i = cid.length - 1; i >= 0; i--) {
      const [curr, available] = cid[i];
      const unit = currencyUnit[curr];
      
      if (changeDue >= unit && available > 0) {
        const count = Math.min(Math.floor(changeDue / unit), available / unit);
        const amount = count * unit;
        change.push([curr, amount]);
        changeDue = parseFloat((changeDue - amount).toFixed(2));
      }
    }
    
    if (changeDue > 0) {
      status = 'INSUFFICIENT_FUNDS';
      change = [];
    } else {
      status = 'OPEN';
    }
  }

  return { 'status': status, 'change': change };
}

console.log(checkCashRegister(27.75, 50, [
  ["PENNY", 1.01], 
  ["NICKEL", 2.05], 
  ["DIME", 3.1], 
  ["QUARTER", 4.25], 
  ["ONE", 90], 
  ["FIVE", 55], 
  ["TEN", 20], 
  ["TWENTY", 60], 
  ["ONE HUNDRED", 100]
]));
