const jwt = require("jsonwebtoken")
const dotenv = require('dotenv')

dotenv.config()

const authenticateToken = (req,res,next) => {
    const authHeader = req.headers['authorization']
    const token  = authHeader && authHeader.split(' ')[1]

    if(token==null){
        return res.status(401).json({ msg : 'Token is missing!'})
    }

    jwt.verify(token, process.env.ACCESS_SECRET_KEY, (error,user)=> {
        if(error){
            return res.status(403).json({ msg : 'Invalid token!'})
        }

        req.user = user
        next()
    })
}   

module.exports = {authenticateToken}