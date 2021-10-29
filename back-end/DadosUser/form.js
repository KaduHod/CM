function separaValoresGastosERendasDoForm(arr){
    
    let rendas = arr.filter(retornaRendas)
    let gastos = arr.filter(retornaGastos)
    let count = 0
    let rendas2= separaCampos(rendas)
    let gastos2= separaCampos(gastos)
    console.log(rendas2)
    console.log(gastos2)
    
    
    
    
}
function separaCampos(arr){
    let ultimoIndice = arr.length-1
    let qtdCampos = ultimoChar(arr[ultimoIndice].Nome)
    let count = 0
    let arrRetorno = []
    let arrAuxiliar = []
    console.log(qtdCampos)
    while(count <= qtdCampos){
        arrAuxiliar = arr.filter(function(item){
            console.log(ultimoChar(item.Nome)==count)
            if(ultimoChar(item.Nome)==count) return true
        })
        arrRetorno.push(arrAuxiliar)
        count++
    }  
    return arrRetorno
}
function userCadastro(obj){
    arrForms = tranformaEmArrayObjetoForms(obj)
    separaValoresGastosERendasDoForm(arrForms)
}

function ultimoChar(str) {
    return str.slice(-1)
} 
function retornaRendas(item){
    if(item.Nome.indexOf('R')>-1) return true
        else return false
}
function retornaGastos(item){
    if(item.Nome.indexOf('G')>-1) return true
    else return false
}
function tranformaEmArrayObjetoForms(obj){
    arrRetorno = []
    for(key in obj){
        arrRetorno.push({Nome:key, valor:obj[key]})
    }
    return arrRetorno
}


module.exports ={ userCadastro}