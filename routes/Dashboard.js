const express = require('express')
const router = express.Router()
const mysql = require('../back-end/db/mysql/teste')
const cript = require('../back-end/cript/crypto')

router.post('/', async (req, res)=>{
    let formulario = {
        username: req.body.username,
        senha: req.body.senha
    }
    try {
        let query = await mysql.SelectUser(formulario)
        if(query[0][0] == undefined) {
            res.send(`Usuario ñ Encontrao!`, )  
        }else{
            if(cript.verificacaoSenhaComDB(formulario.senha, query[0][0].senha)){
                res.render('DashboardInicial', {User:query[0][0]})
                console.log(query[0])
                console.log('aqui em cima!')
                console.log('Usuario encontrado')
            }else{
                res.render('loginRegistrese')
            }           
        } 
    } catch (error) {
        console.log(error)
    }    
})


module.exports = router