function Eventos(){
    let LiMenu = document.getElementsByClassName('LiMenu')
    let LiMenuSemHTMLCollection = [].slice.call(LiMenu)
    LiMenuSemHTMLCollection.forEach((element) => {
        element.addEventListener('click', ()=>{
            let imgMenu = element.childNodes[1].childNodes
            scaleNaImagemMenu(imgMenu[0])
            OptionMenu(element.id)
        }, false)
    })
    
}
function scaleNaImagemMenu(element){
    tiraTransformImagemMenu()
    element.classList.add('imagemMenuActive')
}
function EventosMenu(){
    let itemsMenu = document.getElementsByClassName('LiMenu')
    let itemsMenuSemHtmlCollection = retornaArraySemAHTMLCollection(itemsMenu)
    itemsMenuSemHtmlCollection.forEach(item=>{
        item.addEventListener('click',()=>{
            TrocaConteudoPrincipal(item.id)
        },false)
    })
}
function tiraTransformImagemMenu(){
    let ElementosImagemMenu = retornaArraySemAHTMLCollection(document.getElementsByClassName('imgMenuTopo'))    
    ElementosImagemMenu.forEach(item=>{
        if(retornaArraySemAHTMLCollection(item.classList).indexOf('imagemMenuActive'))item.classList.remove('imagemMenuActive')
    })
}
function resetActiveMenu(){
    let active = document.getElementsByClassName('active')
    let AnimationContent = document.getElementsByClassName('AnimationContent')
    retornaArraySemAHTMLCollection(active)[0].classList.remove('active')
    if(AnimationContent.length>0)retornaArraySemAHTMLCollection(AnimationContent)[0].classList.remove('AnimationContent')
}
function TrocaConteudoPrincipal(id){
    resetActiveMenu()
    switch(id){
        case 'Li0':
            document.getElementById('Geral').classList.add('active')
            document.getElementById('GeralFlex').classList.add('AnimationContent')
            break;
        case 'Li1':
            document.getElementById('Rendas').classList.add('active')
            document.getElementById('RendasFlex').classList.add('AnimationContent')
            break;
        case 'Li2':
            document.getElementById('Gastos').classList.add('active')
            document.getElementById('GastosFlex').classList.add('AnimationContent')
            break;
        case 'Li3':
            document.getElementById('Estudos').classList.add('active')
            document.getElementById('EstudosFlex').classList.add('AnimationContent')
            break;
    }
}
function OptionMenu(identificação){
    tiraActiveLi()
    let elemento = document.getElementById(identificação)
    elemento.classList.add('activeLi')
}
function tiraActiveLi(){
    let elementos = document.getElementsByClassName('activeLi')
    let elementosSemHtmlCollection = [].slice.call(elementos)
    elementosSemHtmlCollection.forEach(el=>{
        el.classList.remove('activeLi')
    })
}
function retornaArraySemAHTMLCollection(array){
    return [].slice.call(array)
}
EventosMenu()
Eventos()


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
function clickAdicionarElemento(el){
    
}
function criaCard(){
    let novoCard = document.createElement('div')
    novoCard.classList.add('cardDashBoardInicialADD')

    let labelNome = document.createElement('div')
    labelNome.classList.add('labelCard')
    labelNome.innerHTML = " <h4>Nome da renda</h4> &nbsp; <input type='text' > "

    let labelValor = document.createElement('div')
    labelValor.classList.add('labelCard')
    labelValor.innerHTML = "<h4>Valor da renda</h4> &nbsp;<input type='number'>"

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
function botarClassAdicionaX(el){
    if(retornaArraySemAHTMLCollection(el.classList).indexOf('adicionarMais'))el.classList.remove('adicionarMais')
    el.classList.add('adicionarX')
    el.addEventListener('click', ()=>{
        // removeClasse(el)
        removeCard(el)
    })
    el.style.transform = 'rotate(0deg)'
}
function removeCard(el){
    let rendasInner = document.getElementById('RendasInner')
    console.log(rendasInner)
    rendasInner.removeChild(el.parentNode)
    console.log(el)
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
avançarRendas()
adicionar()
botaFuncaoBotaoGeral()