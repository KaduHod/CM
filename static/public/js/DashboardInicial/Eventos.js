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


