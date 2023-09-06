// Define the available currency denominations and their values
const denominations = [
    { name: 'ONE HUNDRED', val: 100 },
    { name: 'TWENTY', val: 20 },
    { name: 'TEN', val: 10 },
    { name: 'FIVE', val: 5 },
    { name: 'ONE', val: 1 },
    { name: 'QUARTER', val: 0.25 },
    { name: 'DIME', val: 0.1 },
    { name: 'NICKEL', val: 0.05 },
    { name: 'PENNY', val: 0.01 },
  ];
  
  // Define the checkCashRegister function
  function checkCashRegister(price, cash, cid) {
    // Initialize the output object with status and change properties
    const output = { status: null, change: [] };
    let change = cash - price; // Calculate the required change
    const register = cid.reduce((acc, [name, value]) => {
      acc.total += value;
      acc[name] = value;
      return acc;
    }, { total: 0 }); // Create a register object from the cash-in-drawer array
  
    // Check if the register has exact change and is closed
    if (register.total === change) {
      output.status = 'CLOSED';
      output.change = cid;
      return output;
    }
  
    // Check if the register has insufficient funds
    if (register.total < change) {
      output.status = 'INSUFFICIENT_FUNDS';
      return output;
    }
  
    // Calculate the change using available denominations
    const changeArray = denominations.reduce((acc, { name, val }) => {
      let amount = 0;
      while (register[name] > 0 && change >= val) {
        change -= val;
        register[name] -= val;
        amount += val;
        change = Math.round(change * 100) / 100;
      }
      if (amount > 0) {
        acc.push([name, amount]);
      }
      return acc;
    }, []);
  
    // Check if there is insufficient change or some change remains
    if (changeArray.length < 1 || change > 0) {
      output.status = 'INSUFFICIENT_FUNDS';
    } else {
      output.status = 'OPEN';
      output.change = changeArray;
    }
  
    return output; // Return the output object
  }