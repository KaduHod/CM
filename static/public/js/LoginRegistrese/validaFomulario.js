
function verificaSeInputsEstaoCorretos(array){
    if( array.indexOf(false) > -1 ) return false
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
        (dominio.indexOf(".")>=1) &&
        (dominio.lastIndexOf(".") < dominio.length - 1)){
            return true
        }else return false
}
function isNumber(str) {
    return !isNaN(str)
}

function separaPalavrasEntreLetrasMaiusculas(str){
    return str.split(/(?=[A-ZÀ-Ú])/)
}
