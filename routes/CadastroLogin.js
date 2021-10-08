const express = require('express')
const router = express.Router()

router.get('/', (req, res)=>{
    res.render('cadastro/loginRegistrese.html')
})

router.post('/NovoUser', (req, res)=>{
    let formulario = {
        username: req.body.username,
        senha: req.body.senha,
        confirmacaosenha: req.body.confirmacaosenha,
        email: req.body.email
    }
    res.send(formulario)
})
module.exports = router