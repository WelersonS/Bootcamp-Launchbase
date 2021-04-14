const user = {
    name: 'Mariana',
    transactions: [],
    balance: 0
}

function createTransaction(transaction) {
    user.transactions.push(transaction)

    if(transaction.type === 'debit') {
        user.balance = user.balance - transaction.value
    } else {
        user.balance = user.balance + transaction.value
    }
}

function getHigherTransactionByType(transactionType) {
    let higherValue = 0
    let higherTransaction
    if(user.transactions.length === 0) {
        console.log(`The ${user.name} does not have transactions!`)
    } else {
        for (let i in user.transactions) {
            if(user.transactions[i].type === transactionType && higherValue < user.transactions[i].value) {
                higherValue = user.transactions[i].value
                higherTransaction = user.transactions[i]
            }
        }
 
        console.log(higherTransaction)
    }
}

function getAverageTransactionValue() {
    let sum = 0
    if(user.transactions.length === 0) {
        console.log(`The ${user.name} does not have transactions!`)
    } else {
        for(let i in user.transactions) {
            sum += user.transactions[i].value
        }

        const averageValue = sum / user.transactions.length
        console.log(averageValue.toFixed(2))
    }
}

function getTransactionsCount() {
    let sumTransactionCredit = 0
    let sumTransactionDebit = 0

    if(user.transactions.length === 0) {
        console.log(`The ${user.name} does not have transactions!`)
    } else {
        for(let i in user.transactions) {
            user.transactions[i].type === 'credit' ? sumTransactionCredit++ : sumTransactionDebit++
        }

        console.log(`{ credit: ${sumTransactionCredit}, debit: ${sumTransactionDebit} }`)
    }
}

createTransaction({ type: 'credit', value: 50 })
createTransaction({ type: 'credit', value: 120 })
createTransaction({ type: 'debit', value: 80 })
createTransaction({ type: 'debit', value: 30 })

console.log(user.balance) // 60

getHigherTransactionByType('credit'); // { type: 'credit', value: 120 }
getHigherTransactionByType('debit'); // { type: 'debit', value: 80 }

getAverageTransactionValue() // 70
getTransactionsCount() // { credit: 2, debit: 2 }