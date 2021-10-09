

async function conectaDB(){
    if(global.connection && global.connection.state != 'disconnected') return global.connection;// se conecxao está aiva
    const mysql = require('mysql2/promise')// pacote npm mysql2 (promisses, async & await)
    const connection = await mysql.createConnection('mysql://root:root@localhost:3306/cashmanager') // string de conexão (user, pwd, tipo de host, porta e nome DB)
    console.log('Conectado')
    global.connection = connection// conexão registrada como conexao ativa
    /* connection.end().then(()=>{
        console.log('Conexao fechada')
    }) */
    return connection
}



async function teste(){
    const mysql = require('mysql2/promise')
    const connection = await mysql.createConnection('mysql://root:root@localhost:3306/cashmanager')
    usuarios = await SelectUser() // SELECT * FROM usuarios;
    console.log(usuarios[0]) // retorno
    connection.end().then(()=>{
        console.log('Conexao fechada!')
    }) 
    
}

async function SelectUser(){
    const conn = await conectaDB()
    const rows = conn.query('Select * from usuarios;') // função de query na db 
    return await rows; // retorno da query (array com usuarios no indice 0)
}
module.exports = {SelectUser}