

async function conectaDB(){
    if(global.connection && global.connection.state != 'disconnected') return global.connection;


    const mysql = require('mysql2/promise')
    const connection = await mysql.createConnection('mysql://root:root@localhost:3306/cashmanager')
    console.log('Conectado')
    global.connection = connection
    connection.end().then(()=>{
        console.log('Conexao fechada')
    })
    return connection
}

try {
    conectaDB()
} catch (error) {
    console.log(error)
}

module.exports = {}