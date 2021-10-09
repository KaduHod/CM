function animacaoh3(idH3){
    document.getElementById(idH3).setAttribute('class','h3EmBaixo')
    document.getElementById(idH3+'but').focus()
    
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


function eventos(){
    let todosh3 = document.getElementsByTagName('h3')
    var arr = [].slice.call(todosh3);
    arr.forEach(el => {
        el.addEventListener('click',()=>{
            animacaoh3(`${el.id}`)
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
                
                let verificaçãoInputs = analisaSeArrayDeInputTemConteudo(inputsSemHtmlCollection)
                
                if(verificaçãoInputs){
                    
                    let possoDarSubmit = verificaValidacao(inputsSemHtmlCollection[0].value,inputsSemHtmlCollection[1].value,inputsSemHtmlCollection[2].value,inputsSemHtmlCollection[3].value) 
                    if(possoDarSubmit) formulario.submit()
                    else{
                        alert('CAMPOS PREENCHIDOS NAO VÁLIDOS!')
                    }
                    
                }else{
                    alert('Preencha os dados do fomrulário para se cadastrar!')
                }
            }else{
                let inputs = document.getElementsByClassName('logInput')
                let inputsSemHtmlCollection = retornaArraySemAHTMLCollection(inputs)
                
                let verificaçãoInputs = analisaSeArrayDeInputTemConteudo(inputsSemHtmlCollection)
                if(verificaçãoInputs) {
                    formulario.submit()
                }else{
                    alert('Preencha os dados do formulário antes de se logar!')
                }
                
            }
        })
    })
}
eventos()