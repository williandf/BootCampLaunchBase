const user = {
    name: 'Mariana',
    transactions: [],
    balance: 0
  };

  function createTransaction(transaction){
      if (transaction.type === 'credit') {
          user.balance += transaction.value;
      }else {
          user.balance -= transaction.value;
      }

      user.transactions.push(transaction);
  }

  function getHigherTransactionByType(param){
    let compare = 0,
    id = 0;

    for (let i = 0; i < user.transactions.length; i++) {
        if (
            user.transactions[i].type == param &&
            user.transactions[i].value > compare
          ) {
              compare = user.transactions[i].value;
              id = i;
          }
      }

      return console.log(user.transactions[id]);
  };

  function getAverageTransactionValue(){
      let sum = 0;

      for (let i = 0; i < user.transactions.length; i++){
          sum += user.transactions[i].value;
      }

      const average = sum / user.transactions.length;
      return console.log(`The average value is ${average}`);
  };

  function getTransactionsCount(){
      let countCred = 0;
      let countDebt = 0;

      for (let i = 0; i < user.transactions.length; i++){
        if (user.transactions[i].type == 'credit'){
            countCred++;
        } else {
            countDebt++;
        }
      }

      return console.log({
          credit: countCred,
          debit: countDebt
      }) 
  };

createTransaction({ type: 'credit', value: 50 });
createTransaction({ type: 'credit', value: 120 });
createTransaction({ type: 'debit', value: 80 });
createTransaction({ type: 'debit', value: 30 });

console.log(`${user.name} has a balance of ${user.balance}$`);

getHigherTransactionByType('credit');
getHigherTransactionByType('debit');

getAverageTransactionValue();

getTransactionsCount();