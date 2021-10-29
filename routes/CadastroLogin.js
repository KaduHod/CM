const express = require('express')
const router = express.Router()
const mysql = require('../back-end/db/mysql/teste')
const cript = require('../back-end/cript/crypto')
const form = require('../back-end/DadosUser/form')


router.post('/', (req, res)=>{
    res.render('loginRegistrese')
})

router.post('/NovoUser', (req, res)=>{
    let formulario = {
        nome:req.body.nome,
        username: req.body.username,
        senha: cript.encriptaSenha(req.body.senha),
        confirmacaosenha: req.body.confirmacaosenha,
        email: req.body.email
     }
    try {
        console.log(mysql.InsertUser(formulario))
        res.render('DashboardInicial', {Dados: formulario})
    } catch (error) {
        console.log(error)
        res.send(error)
    }
    
    
})
router.post('/ValidaFormNovoUser', (req, res)=>{
    form.userCadastro(req.body)
    
})
module.exports = router