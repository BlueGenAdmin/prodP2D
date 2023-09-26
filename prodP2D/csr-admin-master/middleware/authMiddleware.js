exports.authMiddleware = (req, res, next) => {
    const condition = req.session.user !== undefined
    if (condition) {
        return next()
    } else {
        // console.log(req.session.user)
        return res.status(200).redirect('/login')
    }
}