const express = require('express')
const mongoControl = require('./back-end/db/clients')
const criptografia = require('./back-end/cript/crypto')
const app = express()
const bodyParser = require('body-parser')

app.use(express.static(__dirname + '/views/public'))
app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())
//app.set('views', path.join(__dirname, 'views'))
//app.set('view engine', '')

app.get('/', async(req, res)=>{
  let senhaTeste = criptografia.cript('123456')

  let req_ = {
    nome: 'Carlos Alberto Ribas Junior',
    login: 'KaduHod',
    pwd: senhaTeste,
    mail: 'carlos@mail.com',
    listaGastos: [
      {nome:'Computador' , valor: 2868, essencial: false },
      {nome: 'CNH', valor: 2100, essencial: false},
      {nome: 'Água e luz', valor: 180, essencial: true},
      {nome: 'Puc-pr', valor: 410, essencial: true},
      {nome: 'Internet', valor: 270, essencial: true},
      {nome: 'Mercado', valor: 500, essencial: true},
    ],
    fundoDeEmergencia: 100,
    listaRendas: [
      {nome: 'Studio N Fit',valor: 600},
      {nome: 'Axie infinity',valor: 2000}
    ],
    estudos: [
      {nome: 'Ánalise e desenvolvimento de sistemas', situação: 'Cursando'},
      {nome: 'Edução fisica', situação: 'Trancado'}
    ]
  }
  try{
    res.sendFile(__dirname + '/views/testes.html')
  }catch (e){
    console.log('Erro no caminho do arquivo')
  }


})
app.post('/verificaLogin', async(req, res)=>{
  let query = await mongoControl('buscar', req.body.Login)
  
  
  if(query && criptografia.deCript(query.pwd) == req.body.Senha){
    res.send(query)
  }else{
    res.send('Algo de errado com a query')
    
  } 

})


app.listen(7070, ()=>{
  console.log('=== SERVIDOR RODANDO EM http://localhost:7070 ===')
})
