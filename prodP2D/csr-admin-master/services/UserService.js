const bcrypt = require('bcrypt')
const { User } = require('../models/index')

exports.findUsers = async () => {
    try {
        const users = await User.find({})
        return users
    } catch (error) {
        return new Error('Users not found in db')
    }
}

exports.findUserById = async (id) => {
    try {
        const user = await User.findById(id)
        return user
    } catch (error) {
        return new Error('User not found in db')
    }
}

exports.createUser = async (username, password, role) => {
    try {
        const saltRounds = 10;
        const salt = await bcrypt.genSaltSync(saltRounds);
        const hash = await bcrypt.hashSync(password, salt);

        const user = new User({
            username,
            password: hash,
            role
        })

        const result = await user.save()

        return result
    } catch (error) {
        return new Error('Error creating user')
    }
}

exports.deleteUserById = async (id) => {
    try {
        const user = await User.deleteOne()
        await user.findById(id)
    } catch (error) {
        return new Error('Error deleting user')
    }
}


exports.findUser = async (username, password, role) => {
    try {
        const user = await User.find({
            username,
            role
        })

        if (!user) {
            return new Error('Incorrect Credentials')
        } else {
            const condition = await bcrypt.compareSync(password, user[0].password)
            return condition ? user : new Error('Incorrect Credentials')
        }
    } catch (error) {
        return new Error(error.message)
    }
}