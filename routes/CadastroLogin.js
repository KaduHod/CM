const express = require('express')
const router = express.Router()

router.get('/', (req, res)=>{
    res.render('cadastro/loginRegistrese.html')
})

module.exports = router