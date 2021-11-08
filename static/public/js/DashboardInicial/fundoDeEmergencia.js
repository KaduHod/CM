function Evento(){
    let botaoSim = document.getElementById('Sim')
    let botaoNao = document.getElementById('Não')
    botaoSim.addEventListener('click',function(item){
        Sim()
    })
    botaoNao.addEventListener('click',function(item){
        Nao()
    })

}
Evento()
function Sim(){
    let CampoFDEexisteOuNao = divFundoDeEmergenciaExisteOuNao()
    let noDepoisDoLugarDoNoDeFundoDeEmergencia = document.getElementById('botaoGeral')
    if(!CampoFDEexisteOuNao){
        let noPai = document.getElementById('GeralFlex')

        let campoFundoDeEmergenciaDiv = document.createElement('div')
        campoFundoDeEmergenciaDiv.setAttribute('id','fundoDeEmergencia')
        campoFundoDeEmergenciaDiv.innerHTML = 'Digite o valor guardado:'

        let campoFundoDeEmergenciaInput = document.createElement('input')
        campoFundoDeEmergenciaInput.setAttribute('class','inputPadrao')
        campoFundoDeEmergenciaInput.setAttribute('type','number')
        campoFundoDeEmergenciaInput.setAttribute('required','required')
        campoFundoDeEmergenciaInput.setAttribute('name','fundoDeEmergenciaValor')
        campoFundoDeEmergenciaDiv.appendChild(campoFundoDeEmergenciaInput)

        noPai.insertBefore(campoFundoDeEmergenciaDiv, noDepoisDoLugarDoNoDeFundoDeEmergencia)
    }
    
    
}
function Nao(){
    let CampoFDEexisteOuNao = divFundoDeEmergenciaExisteOuNao()
    if(CampoFDEexisteOuNao){
        removeFundoDeEmergencia()
    }
}
function retornaArraySemAHTMLCollection(array){
    return [].slice.call(array)
}

function removeFundoDeEmergencia(){
    let geralFlex = document.getElementById('GeralFlex')
    geralfilhos = retornaArraySemAHTMLCollection(geralFlex.childNodes)
    geralfilhos.forEach(item=>{
        if(item.id == 'fundoDeEmergencia') geralFlex.removeChild(item)
    })
}
function divFundoDeEmergenciaExisteOuNao(){
    let retorno = false
    let geralFlex = document.getElementById('GeralFlex')
    geralfilhos = retornaArraySemAHTMLCollection(geralFlex.childNodes)
    geralfilhos.forEach(item=>{
        if(item.id == 'fundoDeEmergencia') retorno = true
    })
    return retorno
}