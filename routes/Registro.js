const express = require('express')
const router = express.Router()

// pagina para regitro do usuario

router.get('/',(req, res)=>{
    res.send('pagina Registro')
})