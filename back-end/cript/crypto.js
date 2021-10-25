const bcrypt = require('bcryptjs')

function encriptaSenha(senha){
  let salt = bcrypt.genSaltSync(10)
  return bcrypt.hashSync(senha,salt)
}

function verificacaoSenhaComDB(senha, hashDB){
  return bcrypt.compareSync(senha, hashDB)
}

module.exports = {
  encriptaSenha,
  verificacaoSenhaComDB
}
