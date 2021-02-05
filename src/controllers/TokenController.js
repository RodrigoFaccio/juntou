const UserPassageiro  = require('../models/UserPassageiro');
const UserMotorista  = require('../models/UserMotorista');

const jwt  = require('jsonwebtoken');
const auth = require('../config/auth.json');




module.exports={
    async loginPassageiro(req,res){
          const {email,password} = req.body; 
          if(!email || !password){
              return res.status(401).json('Preencha todos os campos');
          }

          const userpassageiro  = await UserPassageiro.findOne({where:{email}});
          if(!userpassageiro){
            return res.status(401).json('Usuário não existe');
          }
          if(!(await userpassageiro.pasValid(password))){
            return res.status(401).json('Senha invalida');
          }
          const {id}=userpassageiro;
          const token  = jwt.sign({ id,email },auth.secret,{
              expiresIn: auth.day,
          });
          return res.json({
            token,
            email,
            id
          });

    },
    async loginMotorista(req,res){
      const {email,password} = req.body; 
      if(!email || !password){
          return res.status(401).json('Preencha todos os campos');
      }

      const usermotorista  = await UserMotorista.findOne({where:{email}});
      if(!usermotorista){
        return res.status(401).json('Usuário não existe');
      }
      if(!(await usermotorista.pasValid(password))){
        return res.status(401).json('Senha invalida');
      }
      const {id}=usermotorista;
      const token  = jwt.sign({ id,email },auth.secret,{
          expiresIn: auth.day,
      });
      return res.json({
        token,
        email,
        id
      });

},

   
  
}
