function animacaoh3(idH3){
    document.getElementById(idH3).classList.add('h3EmBaixo')
    
    document.getElementById(idH3+'but').focus()
    
}
function animacaoh32(idH3){
    
    document.getElementById(idH3).classList.add('h3EmBaixo')
    let h3 = document.getElementById(idH3)
    let listaDomTokenListEmArray = retornaArraySemAHTMLCollection(h3.classList)
    if(listaDomTokenListEmArray.indexOf('h3EmBaixo')<=0) h3.classList.add('h3EmBaixo')
    
    
}
function retornaArraySemAHTMLCollection(array){
    return [].slice.call(array)
}
function analisaSeArrayDeInputTemConteudo(array){
    let verificacao = true
    array.forEach(input=>{
        if(input.value == '') verificacao = false
    })
    
    return verificacao
}
function MostrarErroNoInput(verificaçãoInputs){
    let arrInputsComErro = []
    let todosh3 = document.getElementsByClassName('reg')
    var arr = [].slice.call(todosh3)
    arr.forEach((Elemento, i1)=>{
        verificaçãoInputs.VerificaçãoSimplificada.forEach((verificacao,i)=>{
            if(i==i1){
                if(verificacao) Elemento.classList.remove('InputErro')
                else {
                    Elemento.classList.add('InputErro')
                    arrInputsComErro.push(Elemento)
                }
            }   
        }) 
    })     
    InformaCamposComErroAoUser(arrInputsComErro)
}
function botaXnoErro(validacao){
    if(validacao) return true
    else return false
}
function verificaValidacao(username,email,senha,confSenha){
    
    
    arrayDeFuncoesUsername = [temNumero(username),temMinusculo(username),temMaiusculo(username)]
    let tudoOkUsername = true
    let tudoOkSenha = true
    let tudoOkEmail = true
    let tudoOkConfSenha = true
    let objVerificação = {
        username: tudoOkUsername,
        senha:tudoOkSenha,
        email:tudoOkEmail,
        confsenha:tudoOkConfSenha
        //possoDarSubmit:verificaValidacao(tudoOk)
    }
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
    
    objVerificação = {
        username: tudoOkUsername,
        senha:tudoOkSenha,
        email:tudoOkEmail,
        confsenha:tudoOkConfSenha,
        possoDarSubmit:verificaSeInputsEstaoCorretos(tudoOk),
        VerificaçãoSimplificada: [true,tudoOkUsername,tudoOkEmail,tudoOkSenha,tudoOkConfSenha],
    }
    
    return objVerificação
}
function analisaInputsLogin(inputsLogin){
    let verifica = []// se o length do array for mais do que -1 Eu envio os inputs com erro
    inputsLogin.forEach((item,index) =>{
        if(!temMinusculo(item.value) || !temNumero(item.value) || !temMaiusculo(item.value)){
            verifica.push(item)
        }
    })
    
    return verifica
}
function botaXEmCadaInputComErroNoLogin(inputsSemHtmlCollection){
                            
    let inputsComErro = analisaInputsLogin(inputsSemHtmlCollection)
    InformaCamposComErroAoUser(inputsComErro)
    inputsComErro.forEach((item)=>{
        item.previousSibling.previousSibling.classList.add('InputErro')
        //
    })
}
function InformaCamposComErroAoUser(inputs){
    let nomeInputsComErro = []
    inputs.forEach(item=>{
        nomeInputsComErro.push(separaPalavrasEntreLetrasMaiusculas(item.id)[0])
    })
    
    let massages = []
    nomeInputsComErro.forEach(item=>{
        massages.push(RetornaMensagemDeErroDoInput(item))
    })
    console.log(massages)
    let DivErro = document.getElementById('erro')
    if(retornaArraySemAHTMLCollection(DivErro.classList).indexOf('AnimacaoDivErro')){
        DivErro.classList.add('AnimacaoDivErro')
        console.log(DivErro.firstElementChild)
        if(window.screen.width < 700) document.getElementById('Registro').style.marginTop = '110px'
    } 
    //DivErro.style.visibility = 'visible'
    while(DivErro.firstElementChild.childElementCount > 0){
        for(filho of DivErro.firstElementChild.children) filho.remove()
    }
    

    massages.forEach(mensagem=>{
        let li = document.createElement('li')
        li.innerHTML = mensagem
        DivErro.firstElementChild.appendChild(li)
    })
}

function RetornaMensagemDeErroDoInput(nomeInput){
    switch (nomeInput){
        case 'Username':
            return 'Nome de usuário fraco!'
        case 'Senha':
            return 'Senha fraca!'
        case 'Email': 
            return 'Email deve ser válido!'
        case 'Conf':
            return 'Senhas não conferem!'
    }

}
function eventos(){
    let todosh3 = document.getElementsByTagName('h3')
    let arr = [].slice.call(todosh3);
    arr.forEach(el => {
        el.addEventListener('click',()=>{
            animacaoh3(`${el.id}`)
            
        },false)
    }); 
    arr.forEach(el => {
        let input = el.nextSibling.nextSibling
        input.addEventListener('keypress',()=>{
            animacaoh32(`${el.id}`)
            
        },false)
    }); 
    
    let botoes = document.getElementsByTagName('button')
    let botao = [].slice.call(botoes)
    
    let forms = document.getElementsByTagName('form')
    let formSemHtmlCollection = [].slice.call(forms)
    
    formSemHtmlCollection.forEach(formulario => {// tiro o submit
        formulario.addEventListener('submit', (evento)=>{
            evento.preventDefault();
            if(formulario.getAttribute('id') == 'Registro'){
                let inputs = document.getElementsByClassName('regInput')
                let inputsSemHtmlCollection = retornaArraySemAHTMLCollection(inputs)
                
                let verificaçãoInputs = analisaSeArrayDeInputTemConteudo(inputsSemHtmlCollection) // ANALISA SE ALGUM DOS INPUTS ESTÁ VAZIO
                
                if(verificaçãoInputs){
                    
                    let possoDarSubmit = verificaValidacao(inputsSemHtmlCollection[1].value,inputsSemHtmlCollection[2].value,inputsSemHtmlCollection[3].value,inputsSemHtmlCollection[4].value) 
                    if(possoDarSubmit.possoDarSubmit) formulario.submit()
                    else{
                        let divErro = document.getElementById('erro')
                        MostrarErroNoInput(possoDarSubmit)
                        //
                    }
                }else{
                    alert('Preencha os dados do fomrulário para se cadastrar!')
                }
            }else{
                let inputs = document.getElementsByClassName('logInput')
                let inputsSemHtmlCollection = retornaArraySemAHTMLCollection(inputs)
                inputsSemHtmlCollection.forEach(item=>{
                    item.previousSibling.previousSibling.classList.remove('InputErro')
                })
                let verificaçãoInputs = analisaSeArrayDeInputTemConteudo(inputsSemHtmlCollection)
                if(verificaçãoInputs) {
                    let verificaLogin =  analisaInputsLogin(inputsSemHtmlCollection)
                    if(verificaLogin.length == 0){
                        formulario.submit()
                        
                    }else{
                        botaXEmCadaInputComErroNoLogin(inputsSemHtmlCollection)
                        
                        //
                        
                    }
                }else{
                    alert('Preencha os dados do formulário antes de se logar!')
                }
                
            }
        })
    })
}
eventos()