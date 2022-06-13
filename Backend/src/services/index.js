const jwt = require("jsonwebtoken");

module.exports.generateToken = (CodigoEs) =>{
    return jwt.sign({CodigoEs},process.env.JWT_SECRET_KEY,{
        expiresIn: 3600
    })
}



