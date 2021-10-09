const express = require('express')
const router = express.Router()

router.post('/', (req, res)=>{
    res.render('loginRegistrese')
})

router.post('/NovoUser', (req, res)=>{
    // let formulario = {
    //     username: req.body.username,
    //     senha: req.body.senha,
    //     confirmacaosenha: req.body.confirmacaosenha,
    //     email: req.body.email
    // }
    res.send(req.body)
})
module.exports = router