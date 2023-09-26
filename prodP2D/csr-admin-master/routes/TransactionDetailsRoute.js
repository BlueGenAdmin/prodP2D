const router = require('express').Router()
const TransactionDetailsService = require('../services/TransactionDetailsService')

router.get('/', async (req, res) => {
    try {
        const user = req.session.user
        const details = await TransactionDetailsService.getTransactionDetails()
        return res.status(200).render('transaction_details', {
            user,
            details
        })
    } catch (error) {
        return res.status(400).send("No Transaction details found")
    }
})

router.get('/:id', async (req, res) => {
    try {
        const user = req.session.user
        const { id } = req.params
        const TransactionDetails = await TransactionDetailsService.findTransactionDetailsById(id)
        return res.status(200).render('', {
            user
        })
    } catch (error) {
        return res.status(400).redirect('/Transaction_details')
    }
})

router.post('/create_Transaction_details', async (req, res) => {
    try {
        const user = req.session.user
        const {
            csrName,
            accountBalance,
            deduction,
            added,
            details,
            TransactionId,
            paymentMethodId
        } = req.body

        const Transaction = await TransactionDetailsService.createTransactionDetails(
            csrName, 
            accountBalance,
            details,
            added,
            deduction,
            TransactionId,
            paymentMethodId
        )
        return res.status(200).json(Transaction)
    } catch (error) {
        return res.status(400).send(error.message)
    }
})

module.exports = router