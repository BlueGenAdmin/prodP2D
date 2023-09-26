const { TransactionDetails } = require('../models/index')

exports.getTransactionDetails = async () => {
    try {
        const transactions = await TransactionDetails.find({})
        return transactions
    } catch (error) {
        return new Error("Error fetching transactions")
    }
}

exports.findTransactionDetailsById = async (id) => {
    try {
        const TransactionDetails = await TransactionDetails.findById(id)
        return TransactionDetails
    } catch (error) {
        return new Error('TransactionDetails not found in db')
    }
}

exports.createTransactionDetails = async (csrName, accountBalance, deduction, details, added) => {
    try {
        const TransactionDetails = new TransactionDetails({
            csrName,
            accountBalance,
            deduction,
            details, 
            added
        })

        await TransactionDetails.save()
    } catch (error) {
        return new Error('Error creating TransactionDetails')
    }
}
