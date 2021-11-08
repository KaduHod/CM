const express = require('express')
const mongoControl = require('./back-end/db//mongoDb/clients')
const criptografia = require('./back-end/cript/crypto')
const app = express()
const bodyParser = require('body-parser')
const path = require('path')
const handlebars = require('express-handlebars')

//ROTAS
  const CadastroLogin = require('./routes/CadastroLogin')
  const Dashboard = require('./routes/Dashboard')

// config
  app.use(express.static(path.join(__dirname + '/static/public/')))
  app.use(bodyParser.urlencoded({extended:false}))
  app.use(bodyParser.json())
  

  // view engine setup
    app.set('views', path.join(__dirname, 'views'));
    // app.engine('html', require('ejs').renderFile);
    //app.engine('handlebars',handlebars())
    app.engine('handlebars', handlebars({defaultLayout: 'main'}))
    app.set('view engine', 'handlebars')
    
    
    

app.get('/', async(req, res)=>{
  try{
    res.render('home');
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
