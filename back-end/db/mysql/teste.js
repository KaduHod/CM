

async function conectaDB(){
    if(global.connection && global.connection.state != 'disconnected') return global.connection;// se conecxao está aiva
    const mysql = require('mysql2/promise')// pacote npm mysql2 (promisses, async & await)
    const connection = await mysql.createConnection('mysql://root:root@localhost:3306/cashmanager') // string de conexão (user, pwd, tipo de host, porta e nome DB)
    console.log('Conectado')
    global.connection = connection// conexão registrada como conexao ativa
    
    return connection
}



async function teste(){
    const mysql = require('mysql2/promise')
    const connection = await mysql.createConnection('mysql://root:root@localhost:3306/cashmanager')
    //usuarios = await SelectUser() // SELECT * FROM usuarios;
    user = {
        nome:'Carlos 2',
        username: 'carlos2',
        email: 'carlos@mail2.com',
        senha: 'senha'
    }
    //await InsertUser(user)
    users = await SelectUser()
    console.log(users[0])
    connection.end().then(()=>{
        console.log('Conexao fechada!')
    }) 
    
}

async function SelectUser(user){
    const conn = await conectaDB()
    const rows = conn.query(`Select * from usuarios where username = '${user.username}'`) // função de query na db 
    return await rows; // retorno da query (array com usuarios no indice 0)
}
async function InsertUser(novoUsuario){
    const conn = await conectaDB()
    const sql = `INSERT INTO cashmanager.usuarios(nome,username,email,senha) values (
        (?),        (?),        (?),        (?)    )`
        const values = [novoUsuario.nome, novoUsuario.username, novoUsuario.email, novoUsuario.senha]
    const rows = conn.query(sql,values)
    setTimeout(()=>{
        console.log(rows[0])
    }, 10000)
    return await rows
}


module.exports = {SelectUser, InsertUser}