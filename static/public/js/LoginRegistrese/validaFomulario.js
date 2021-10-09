function verificaValidacao(username,email,senha,confSenha){
    
    let objVerificação = {
        username: true,
        senha:true,
    }
    arrayDeFuncoesUsername = [temNumero(username),temMinusculo(username),temMaiusculo(username)]
    let tudoOkUsername = true
    let tudoOkSenha = true
    let tudoOkEmail = true
    let tudoOkConfSenha = true
    arrayDeFuncoesUsername.forEach(funcao=>{
        objVerificação.username = funcao
        if(objVerificação.username == false) tudoOkUsername = false
    })
    arrayDeFuncoesSenha = [temNumero(senha),temMinusculo(senha),temMaiusculo(senha)]
    arrayDeFuncoesSenha.forEach(funcao=>{// verifico
        objVerificação.senha = funcao
        if(objVerificação.senha == false) tudoOkSenha = false
    })
        
    tudoOkEmail = validaEmail(email)
    
    if(confSenha !== senha) tudoOkConfSenha = false
    tudoOk = [tudoOkUsername,tudoOkEmail,tudoOkSenha,tudoOkConfSenha]

    console.log(tudoOk)
    if(tudoOk.indexOf(false)>-1) return false
    else return true 
}


function temNumero(string){ 
    let temNum = false
    let stringArray = string.split('')
    stringArray.forEach(char => {
        if(isNumber(char)) temNum = true
    })
    return temNum
}
function temMinusculo(str){
    let strUpper = str.toUpperCase()
    if(str == strUpper) return false
    else return true
}
function temMaiusculo(str){
    let strLower = str.toLowerCase()
    if(str == strLower) return false
    else return true
}
function validaEmail(str){
    let usuario = str.substring(0, str.indexOf('@'))
    let dominio = str.substring(str.indexOf('@')+1, str.length)
    if ((usuario.length >=1) &&
        (dominio.length >=3) &&
        (usuario.search("@")==-1) &&
        (dominio.search("@")==-1) &&
        (usuario.search(" ")==-1) &&
        (dominio.search(" ")==-1) &&
        (dominio.search(".")!=-1) &&
        (dominio.indexOf(".") >=1) &&
        (dominio.lastIndexOf(".") < dominio.length - 1)){
            return true
        }else return false
}
function isNumber(str) {
    return !isNaN(str)
}