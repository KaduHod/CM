const express = require('express')
const mongoControl = require('./back-end/db/clients')
const criptografia = require('./back-end/cript/crypto')
const app = express()
const bodyParser = require('body-parser')
const path = require('path')

//ROTAS
  const CadastroLogin = require('./routes/CadastroLogin')
  const Dashboard = require('./routes/Dashboard')

// config
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
  pwd: '123456',
  mail: 'carlos@mail.com',
  listaGastos: [
    {nome:'Mesada Pai' , valor: 200, essencial: true, mensal: true },
    {nome:'Mesada Mãe' , valor: 200, essencial: false, mensal: true },
    {nome:'Namorada' , valor: 200, essencial: false, mensal: true },
    {nome: 'CNH', valor: 3500, essencial: false, mensal: false},
    {nome: 'Água e luz', valor: 180, essencial: true, mensal: true},
    {nome: 'Puc-pr', valor: 410, essencial: true, mensal: true},
    {nome: 'Internet', valor: 270, essencial: true, mensal: true},
    {nome: 'Imposto', valor: 155, essencial: true, mensal: true},
  ],
  fundoDeEmergencia: 9000,
  listaRendas: [
    {nome: 'Studio N Fit',valor: 600},
    {nome: 'Axie infinity',valor: 2000}
  ],
  estudos: [
    {nome: 'Ánalise e desenvolvimento de sistemas', situação: 'Cursando'},
    {nome: 'Edução fisica', situação: 'Trancado'}
  ]
}
  } */

  try{
    res.sendFile(__dirname + '/views/landingPage.html')
  }catch (e){
    console.log(e)
  }
})


//ROTAS
  app.use('/CadastroLogin', CadastroLogin)
  app.use('/Dashboard', Dashboard)



app.listen(7070, ()=>{
  console.log('=== SERVIDOR RODANDO EM http://localhost:7070 ===')




})
