const express = require('express')
const mongoControl = require('./back-end/db/clients')
const criptografia = require('./back-end/cript/crypto')
const app = express()
const bodyParser = require('body-parser')
const path = require('path')

//ROTAS
  const CadastroLogin = require('./routes/CadastroLogin')


app.use(express.static(path.join(__dirname + '/static/public/')))
app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');






app.get('/', async(req, res)=>{
  let senhaTeste = criptografia.cript('123456')

  /* let req_ = {
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
  } */

  try{
    res.sendFile(__dirname + '/views/landingPage.html')
  }catch (e){
    console.log('Erro no caminho do arquivo')
  }
})


//ROTAS
  app.use('/CadastroLogin', CadastroLogin)



app.listen(7070, ()=>{
  console.log('=== SERVIDOR RODANDO EM http://localhost:7070 ===')




})
