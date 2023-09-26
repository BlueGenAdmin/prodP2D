const router = require('express').Router()
const UserService = require('../services/UserService')
const auth = require('../middleware/authMiddleware')

router.get('/', auth.authMiddleware, async (req, res) => {
    try {
        const user = req.session.user
        const users = await UserService.findUsers()
        return res.status(200).render('user_details', {
            user,
            users
        })
    } catch (error) {
        return res.status(400).send("No users found")
    }
})

router.get('/create_user', auth.authMiddleware, (req, res) => {
    const user = req.session.user
    return res.status(200).render('create_user', {
        user
    })
})

router.get('/:id', auth.authMiddleware, async (req, res) => {
    try {
        const user = req.session.user
        const { id } = req.params
        const User = await UserService.findUserById(id)
        return res.status(200).send('user')
    } catch (error) {
        return res.status(400).redirect('/')
    }
})

router.post('/create_user', async (req, res) => {
    try {
        const {
            username,
            password,
            role
        } = req.body

        const user = await UserService.createUser(
            username,
            password,
            role
        )

        return res.status(200).redirect('/')
    } catch (error) {
        return res.status(400).send(error.message)
    }
})

router.get('/delete_user/:id', async (req, res) => {
    try {
        const { id } = req.params

        const user = await UserService.deleteUserById(id)
        console.log(user);

        return res.status(200).redirect('/')
    } catch (error) {
        return res.status(400).send(error.message)
    }
})

module.exports = router