const express = require('express')
const router = express.Router()
const mysql = require('../back-end/db/mysql/teste')
const cript = require('../back-end/cript/crypto')
const form = require('../back-end/DadosUser/form')
const user = require('../back-end/tipos/user')


router.post('/', async (req, res)=>{
    let users = await mysql.SelectAllFromUsers()
    let usernamesJaCadastrados = separaUserNames(users)
    let emailsJaCadastrados = separaEmails(users)
    let stringUsernamesJaCadastrados = juntaArrayEmString(usernamesJaCadastrados)
    let stringEmailsJaCadastrados = juntaArrayEmString(emailsJaCadastrados)
    
    let UsersJaCadastrados = {username:stringUsernamesJaCadastrados, email:stringEmailsJaCadastrados}
    await res.render('loginRegistrese', {User:UsersJaCadastrados})
})
function separaUserNames(query){
    let arrUserNames = []
    query.forEach(user => {
        arrUserNames.push(' '+user.username)
    })
    return arrUserNames
}
function juntaArrayEmString(arrayDeValores){
    let string = ''
    arrayDeValores.forEach(item => {
        string+= item
    })
    return string
}
function separaEmails(query){
    let arrEmails = []
    query.forEach(user => {
        arrEmails.push(' '+user.email)
    })
    return arrEmails
}


router.post('/NovoUser',async (req, res)=>{
    let formulario = {
        nome:req.body.nome,
        username: req.body.username,
        senha: cript.encriptaSenha(req.body.senha),
        confirmacaosenha: req.body.confirmacaosenha,
        email: req.body.email
     }
    try {
        let query = await mysql.SelectUser(formulario)
        console.log(query[0][0])
        formulario.idDB = query[0][0].id

        //console.log(mysql.InsertUser(formulario))
        //res.render('DashboardInicial', {User: formulario})
    } catch (error) {
        console.log(error)
        res.send(error)
    }
    
    
})
router.post('/ValidaFormNovoUser', (req, res)=>{
  
    
    let formUser = form.userCadastro(req.body)
    let objUser = {
        id:req.body.idDB,
        rendas:formUser[0],
        gastos:formUser[1],
        fundoDeEmergencia:formUser[2]
    }
    let id = objUser.id
    let arrayGastos = objUser.gastos
    let arrayRendas = objUser.rendas
    cadastraGastos(id,arrayGastos)
    cadastraRendas(id,arrayRendas)
    
    
})

function cadastraRendas(id,arrayRendas){
    arrayRendas.forEach(renda=>{
        let arr = [renda.nome, renda.valor, renda.essencial, id]
        mysql.insertRendas(id,retornaArrParaQuery(renda))
    })

}
function cadastraGastos(id,arrayGastos){// função que chama a query
    arrayGastos.forEach(gasto => {
        let arr = [gasto.nome, gasto.valor, gasto.essencial, id]
        mysql.insertGastos(id,retornaArrParaQuery(gasto))
    })
}
function retornaRendas(rendas){
    let arr = []
    if(rendas.essencial) arr.essencial = 1
    else arr.essencial = 0
    if(rendas.mensal) arr.mensal = 1
    else arr.mensal = 0

    return arr
}

function retornaArrParaQuery(gasto){
    let arr = gasto
    if(gasto.essencial) arr.essencial = 1
    else arr.essencial = 0
    if(gasto.mensal) arr.mensal = 1
    else arr.mensal = 0

    return arr
}
module.exports = router