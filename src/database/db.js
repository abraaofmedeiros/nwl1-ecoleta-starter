// importr a dependencia do sqlite3
const sqlite3 = require("sqlite3").verbose()


//iniciar o objeto de banco de dados
const db = new sqlite3.Database("./src/database/database.db")

module.exports = db

//utilizar o objeto de banco de dados na aplicacao

db.serialize(() => {
    //Criar uma tabela
    // db.run(`
    //     CREATE TABLE IF NOT EXISTS places (
    //         id INTEGER PRIMARY KEY AUTOINCREMENT,
    //         image TEXT,
    //         name TEXT, 
    //         address TEXT,
    //         address2 TEXT,
    //         state TEXT,
    //         city TEXT,
    //         items TEXT
    //     );
    // `)
    // //Inserir dados
    // const query = `
    //     INSERT INTO places (
    //         image,
    //         name,
    //         address,
    //         address2,
    //         state,
    //         city,
    //         items 
    //     ) VALUES (?, ?, ?, ?, ?, ?, ?);
    // `

    // const values = [
    //     "https://images.unsplash.com/photo-1567393528677-d6adae7d4a0a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=60",
    //     "Paperside",
    //     "Guilherme Gemballa, Jardim America",
    //     "Numero 260",
    //     "Santa Catarina",
    //     "Rio do Sul",
    //     "Papeis e Papelao"

    // ]

    // function afterInsertData(err) {
    //     if (err) {
    //         return console.log(err)
    //     }

    //     console.log("Cadastrado com sucesso")
    //     console.log(this)

    // }

    // //db.run(query, values, afterInsertData)

    // //consultar dados
    // db.all(`SELECT * FROM places`, function(err, rows) {
    //     if(err) {
    //         return console.log(err)
    //     }

    //     console.log("Aqui estao seus registros")
    //     console.log(rows)
    // })

    //deletar dado na tabela
    // db.run(`DELETE FROM places WHERE id = ?`, [1])

})

