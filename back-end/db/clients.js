const { MongoClient } = require("mongodb")
const User = require('../tipos/user')

async function mongoControl(tipoQuery, objQuery){
    //tipo query: se será busca, insert, remove ou update
    // objQuery: objeto contendo dado a ser inserido, dado de consulta e dado atualizado
    
    const uri_CMlocal = "mongodb://localhost/CashManager"

    let client = new MongoClient(uriAtlas, { useUnifiedTopology: true })
    try{
        await client.connect().then(()=>{
            console.log('Conectado ao atlas da amazon!')
        })
        switch (tipoQuery){
            case 'inserir':
                let novo_user = new User(objQuery)
                await insertUser(client, novo_user)
                break;
            case 'remover':
                await removeUser(client, objQuery.nome)
                break;

            case 'update':
                let dadoAtualizado = new User(objQuery)
                await updateUser(client, objQuery.nome, dadoAtualizado)
                break;
            case 'buscar':
                let query = await searchUser(client, objQuery)
                console.log(objQuery)
                return query
                break;
            default:
                console.log('Erro no parametro de requisição ao servidor!')
        }
    }catch(e){
        console.log(e)
    }finally{
        await client.close()
    }

}

async function insertUser(client, dado){
  let result = await client.db('CashManager').collection('Users').insertOne(dado)
  console.log(result)
}

async function removeUser(client, dadoConsulta){
  let result = await client.db('CashManager').collection('Users').deleteOne({nome: dadoConsulta})
  console.log(result)
}

async function updateUser(client, nomeConsulta ,dadoAtualizado){
  let result = await client.db("CashManager").collection('Users').updateOne({nome: nomeConsulta },{$set: dadoAtualizado})
  console.log(result)
}

async function searchUser(client, usernameDigitado){
    let result = await client.db("CashManager").collection("Users").findOne({login: usernameDigitado})
    return result
}

module.exports = mongoControl
