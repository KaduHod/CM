function mudaText(item){
    let divText = document.getElementById('TextoMiddleContent')
    
    function mudaTexto(){
        if(item == 'item1'){
            divText.innerHTML = 'Cash manager é um aplicativo web que tem o objetivo de ajudar a sua organização financeira, dando uma vizualização mais clara com graficos e tabelas de todas as suas fontes de renda e gastos!'
        }else{
            divText.innerHTML = 'Com o aplicativo você pode organizar os seus gastos e visualizar as suas rendas de uma forma bem facíl. Separe o dinheiro necessário de uma forma mais coesa com a sua vida financeira.'
        }
    }
    
    mudaTexto()
}
function menu(posicao){
    
    
    let menuItem = document.getElementById('menu')
    if(posicao == 'fora'){
        menuItem.style.right = '0px'
        menuItem.addEventListener('click',()=>{
            menu('dentro')
        },false)
    }else{
        menuItem.style.right = '-45vw'
        menuItem.addEventListener('click',()=>{
            menu('fora')
        },false)
        
    }
    
}
function Eventos(){
    document.getElementById('item1').addEventListener('click',()=>{
    mudaText('item1')
    },false)
    let itemHeader2 = document.getElementById('item2').addEventListener('click',()=>{
        mudaText('item2')
    },false)
    document.getElementById('mobileMenu').addEventListener('click', ()=>{
        menu('fora')
    },false)

    document.getElementById('item1Menu').addEventListener('click',()=>{
        mudaText('item1')
    },false)
    document.getElementById('item2Menu').addEventListener('click',()=>{
        mudaText('item2')
    },false)
}

Eventos()