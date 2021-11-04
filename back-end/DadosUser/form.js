function separaValoresGastosERendasDoForm(arr){
    
    let rendas = arr.filter(retornaRendas)
    let gastos = arr.filter(retornaGastos)
    let rendas2= separaCampos(rendas)
    let gastos2= separaCampos(gastos)
    //console.log('=============')
    //criaListaRendas(rendas2)
    
    let rendas3 = criaListaRendas(rendas2)
    console.log(rendas3)
    console.log('\n')
    let gastos3 = criaListaGastos(gastos2)
    console.log(gastos3)
    
}
function separaCampos(arr){
    let ultimoIndice = arr.length-1
    let qtdCampos = ultimoChar(arr[ultimoIndice].Nome)
    let count = 0
    let arrRetorno = []
    let arrAuxiliar = []
    while(count <= qtdCampos){
        arrAuxiliar = arr.filter(function(item){
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

function criaListaGastos(gastos){
    let listaGastos = []
    console.log('Inicio lista de gastos')
    gastos.forEach(el => {
        listaGastos.push(retornaObjGasto(el))
    });
    return listaGastos
}

function retornaObjGasto(gasto){
    let gastoRetorno = {
        nome:'',
        valor:'',
        essencial: false,
        mensal: false
    }
    gasto.forEach(el=>{
        if(el.Nome.indexOf('Nome')>-1) gastoRetorno.nome = el.valor
        if(el.Nome.indexOf('Valor')>-1) gastoRetorno.valor = el.valor
        if(el.Nome.indexOf('Essencial')>-1) gastoRetorno.essencial = true
        if(el.Nome.indexOf('Mensal')>-1) gastoRetorno.mensal = true
    })
    return gastoRetorno
}

function criaListaRendas(rendas){
    let listaRendas = []
    rendas.forEach(el=>{
        listaRendas.push(retornaObjRenda(el))
    })

    return listaRendas
}
function retornaObjRenda(renda){
    let rendaRetorno = {
        nome:'',
        valor:''
    }

    renda.forEach(el=>{
        if(el.Nome.indexOf('Nome')>-1) rendaRetorno.nome = el.valor
        if(el.Nome.indexOf('Valor')>-1) rendaRetorno.valor = el.valor
    })

    return rendaRetorno
}

    
module.exports ={userCadastro}