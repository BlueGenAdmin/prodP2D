const { PlayerDetails } = require('../models/index')

exports.getPlayerDetails = async () => {
    try {
        const details = await PlayerDetails.find({})
        return details
    } catch (error) {
        return new Error("Error fetching Players")
    }
}

exports.findPlayerDetailsById = async (id) => {
    try {
        const playerDetails = await PlayerDetails.findById(id)
        return playerDetails
    } catch (error) {
        return new Error('PlayerDetails not found in db')
    }
}

exports.createPlayerDetails = async (
    csrName,
    accountBalance,
    details,
    added,
    deduction,
    playerId,
    paymentMethodId,
    csrId
) => {
    try {
        const playerDetails = new PlayerDetails({
            csrName,
            accountBalance,
            details,
            added,
            deduction,
            playerId,
            paymentMethodId,
            csrId
        })

        const player = await playerDetails.save()
        return player
    } catch (error) {
        return new Error('Error creating PlayerDetails')
    }
}

exports.incrementBalance = async (id, balance) => {
    try {
        const playerDetails = await PlayerDetails.findByIdAndUpdate(id, {
            $inc: {
                accountBalance: balance
            }
        })

        return playerDetails
    } catch (error) {
        return new Error('Error incrementing balance')
    }
}

exports.deductBalance = async (id, balance) => {
    try {
        const playerDetails = await PlayerDetails.findByIdAndUpdate(id, {
            $inc: {
                accountBalance: -balance
            }
        })

        return playerDetails
    } catch (error) {
        return new Error('Error Deducting balance')
    }
}