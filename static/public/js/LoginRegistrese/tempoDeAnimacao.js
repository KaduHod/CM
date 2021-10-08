let esqForm = document.getElementById('Login')
let dirForm = document.getElementById('Registro')
let childsDir = [].slice.call(dirForm);
let childsEsq = [].slice.call(esqForm);
childsEsq.push([document.getElementById('labelTituloEsq')])
childsDir.push([document.getElementById('labelTitulodir')])
/* let childsEsq = esqForm.childNodes */

/* console.log(childsEsq)
console.log(childsDir) */

function botaAnimacoes(){
    for(i=0;i<childsDir.length;i++){
        childsDir[i].style.transform = `translateX(-101vw)`
        console.log(childsDir[i])
    }
}
//botaAnimacoes()