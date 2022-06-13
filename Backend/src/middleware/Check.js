const {user:UserModel} = require('../../models');
const jwt = require("jsonwebtoken");

module.exports.Chekauth = async(req,res,next) =>{
    let token;
    if(req.headers.authorization && req.headers.authorization.startsWith("Bearer")){
        try{
            token = req.headers.authorization.split(" ")[1];
            const decodificate = jwt.verify(token,process.env.JWT_SECRET_KEY);
            console.log(decodificate);
            req.user = await UserModel.findOne( {where: {codigo:decodificate.CodigoEs }});
            return next();
        }catch(error){
            console.log(error);
           return res.status(404).json({msg:"Hubo un error"});
        }
    }
    if(!token){
        const error = new Error("Token invalido");
        res.status(401).json({msg:error.message});
    }
     next();
}