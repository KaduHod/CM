const crypto = require('crypto')
const alg = 'aes-256-ctr'
const senha = '123456'

function cript(text){
  const cipher = crypto.createCipher(alg, senha)
  return cipher.update(text, 'utf8', 'hex')
}

function deCript(textCript){
  const decipher = crypto.createDecipher(alg, senha)
  return decipher.update(textCript, 'hex', 'utf8')
}

let teste = cript('12345')
let deTeste = deCript('c1bc06eea03b')
console.log(deTeste)

module.exports = {
  deCript,
  cript
}
