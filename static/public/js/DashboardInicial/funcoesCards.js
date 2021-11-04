function botaFuncaoBotaoGeral(){// função para botao ir direto para a aba de rendas
    let botao = document.getElementById('botaoGeral')
    botao.addEventListener('click', ()=>{
        OptionMenu('Li1')
        TrocaConteudoPrincipal('Li1')
        let imgMenu = document.getElementById('Li1').childNodes[1].childNodes
        scaleNaImagemMenu(imgMenu[0])
    },false)
}

function adicionar(){
    let adicionarElements = retornaArraySemAHTMLCollection(document.getElementsByClassName('adicionar'))
   adicionarElements.map(el =>{
    el.addEventListener('click',()=>{
        botarClassAdicionaX(el)
        criaCard()
    })
   })
    
}
function adicionarGastos(){
    let adicionarElements = retornaArraySemAHTMLCollection(document.getElementsByClassName('adicionarGastos'))
    adicionarElements.map(el =>{
     el.addEventListener('click',()=>{
         botarClassAdicionaXGastos(el)
         criaCardGastos()
     })
    })
}
function botarClassAdicionaXGastos(el){
    if(retornaArraySemAHTMLCollection(el.classList).indexOf('adicionarMais'))el.classList.remove('adicionarMais')
    el.classList.add('adicionarX')
    el.addEventListener('click', ()=>{
        // removeClasse(el)
        removeCardGastos(el)
    })
    el.style.transform = 'rotate(0deg)'
}
function removeCardGastos(el){
    let GastosInner = document.getElementById('GastosInner')
    GastosInner.removeChild(el.parentNode)
    console.log(el)
    GastosInner.removeChild(GastosInner.lastChild)
}
var countGastos = 1
function criaCardGastos(){
    let novoCard = document.createElement('div')
    novoCard.classList.add('cardDashBoardInicialADD')

    let labelNome = document.createElement('div')
    labelNome.classList.add('labelCard')
    labelNome.innerHTML = `<h4>Nome do gasto</h4> &nbsp; <input required="required" name='GastoInputNome${countGastos}' type='text' > `
   
    let labelValor = document.createElement('div')
    labelValor.classList.add('labelCard')
    labelValor.innerHTML = `<h4>Valor do gasto</h4> &nbsp;<input required="required" name='GastoInputValor${countGastos}' type='number'>`
   
    let labelEssencial = document.createElement('div')
    labelEssencial.classList.add('labelCard')
    labelEssencial.innerHTML = `<h4>Essencial</h4> &nbsp; <input class='checkbox' name='GastoInputEssencial${countGastos}' type='checkbox'>`
    
    let labelMensal = document.createElement('div')
    labelMensal.classList.add('labelCard')
    labelMensal.innerHTML = `<h4>Mensal</h4> &nbsp; <input class='checkbox' name='GastoInputMensal${countGastos}' type='checkbox'>`
    countGastos++
    let adicionarGastos = document.createElement('div')
    adicionarGastos.classList.add('adicionarGastos')
    adicionarGastos.addEventListener('click', ()=>{
        botarClassAdicionaXGastos(adicionarGastos)
        criaCardGastos()
    })

    novoCard.appendChild(labelNome)
    novoCard.appendChild(labelValor)
    novoCard.appendChild(labelEssencial)
    novoCard.appendChild(labelMensal)
    novoCard.appendChild(adicionarGastos)

    document.getElementById('GastosInner').appendChild(novoCard)
}
function botarClassAdicionaX(el){
    if(retornaArraySemAHTMLCollection(el.classList).indexOf('adicionarMais'))el.classList.remove('adicionarMais')
    el.classList.add('adicionarX')
    el.addEventListener('click', ()=>{
        // removeClasse(el)
        removeCard(el)
    })
    el.style.transform = 'rotate(0deg)'
}
var count = 1
function criaCard(){
    let novoCard = document.createElement('div')
    novoCard.classList.add('cardDashBoardInicialADD')

    let labelNome = document.createElement('div')
    labelNome.classList.add('labelCard')
    labelNome.innerHTML = ` <h4>Nome da renda</h4> &nbsp; <input required="required" name='RendaInputNome${count}' type='text' > `
    
    let labelValor = document.createElement('div')
    labelValor.classList.add('labelCard')
    labelValor.innerHTML = `<h4>Valor da renda</h4> &nbsp;<input required="required" name='RendaInputValor${count}' type='number'>`
    count++
    let adicionar = document.createElement('div')
    adicionar.classList.add('adicionar')
    adicionar.addEventListener('click', ()=>{
        botarClassAdicionaX(adicionar)
        criaCard()
    })

    novoCard.appendChild(labelNome)
    novoCard.appendChild(labelValor)
    novoCard.appendChild(adicionar)

    document.getElementById('RendasInner').appendChild(novoCard)
}
function removeCard(el){
    let rendasInner = document.getElementById('RendasInner')
    rendasInner.removeChild(el.parentNode)
    rendasInner.removeChild(rendasInner.lastChild)
}
function avançarRendas(){
    let botaoAvançarRendas = document.getElementById('anvançarRendas')
    botaoAvançarRendas.addEventListener('click', ()=>{
        OptionMenu('Li2')
        TrocaConteudoPrincipal('Li2')
        let imgMenu = document.getElementById('Li2').childNodes[1].childNodes
        scaleNaImagemMenu(imgMenu[0])
    })
}
function avançarGastos(){
    let botaoAvançarGastos = document.getElementById('anvançarGastos')
    botaoAvançarGastos.addEventListener('click', ()=>{
       console.log('Pronto para salvar no banco de dados!')
    })
}
avançarGastos()
avançarRendas()
adicionar()
adicionarGastos()
botaFuncaoBotaoGeral()