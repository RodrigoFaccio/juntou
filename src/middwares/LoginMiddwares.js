const jwt  = require('jsonwebtoken');

const auth = require('../config/auth.json');


module.exports = (req,res,next)=>{
    const {authorization} = req.headers;

    if (!authorization) {
        return res.status(401).json({
            errors:['Login required'],
        });
    }

    const [text,token]= authorization.split(' ');

    try {
        const dados = jwt.verify(token,auth.secret);
        const {id,email} = dados;
        req.userId = id;
        req.userEmail = email;
        return next();

    }catch (error){
        return res.status(401).json({
            errors:['Token expirado ou invalido'],
        })
    }
};