const express = require('express')
const router = express.Router()
const mysql = require('../back-end/db/mysql/teste')

router.post('/', async (req, res)=>{
    let formulario = {
        username: req.body.username,
        senha: req.body.senha
    }
    try {
        let query = await mysql.SelectUser(formulario)
        if(query[0][0] == undefined) {
            
            console.log('Usuario nao encontrado')
            res.send('deu ruim')  
        }else{
            res.render('Dashboard',{User:query[0][0]})
            console.log('Usuario encontrado')
                  
        } 
    } catch (error) {
        console.log(error)
    }    
})

module.exports = router