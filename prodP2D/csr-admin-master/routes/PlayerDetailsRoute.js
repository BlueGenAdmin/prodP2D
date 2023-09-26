const router = require('express').Router()
const PlayerDetailsService = require('../services/PlayerDetailsService')
const auth = require('../middleware/authMiddleware')

router.get('/', auth.authMiddleware, async (req, res) => {
    try {
        const user = req.session.user
        const details = await PlayerDetailsService.getPlayerDetails()
        return res.status(200).render('player_details', {
            user,
            details
        })
    } catch (error) {
        return res.status(400).send("No player details found")
    }
})

router.get('/create_player', auth.authMiddleware, async (req, res) => {
    try {
        const user = req.session.user
        return res.status(200).render('create_player', {
            user
        })
    } catch (error) {
        return res.status(400).send('Error loading page')
    }
})

router.get('/bulletinBoard', auth.authMiddleware, async (req, res) => {
    try {
        const user = req.session.user
        return res.status(200).render('bulletinBoard', {
            user
        })
    } catch (error) {
        return res.status(400).send('Error loading page')
    }
})

router.get('/:id', auth.authMiddleware, async (req, res) => {
    try {
        const user = req.session.user
        const { id } = req.params
        const playerDetails = await PlayerDetailsService.findPlayerDetailsById(id)
        return res.status(200).render("", {
            user
        })
    } catch (error) {
        return res.status(400).redirect('/')
    }
})

router.post('/create_player_details', async (req, res) => {
    try {
        const {
            csrName,
            accountBalance,
            deduction,
            added,
            details,
            playerId,
            paymentMethodId,
            csrId
        } = req.body

        const player = await PlayerDetailsService.createPlayerDetails(
            csrName, 
            accountBalance,
            details,
            added,
            deduction,
            playerId,
            paymentMethodId,
            csrId
        )
        return res.status(200).json(player)
    } catch (error) {
        return res.status(400).send(error.message)
    }
})

module.exports = router