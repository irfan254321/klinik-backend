const cors = require("cors")
const express = require("express")
const mysql = require("mysql")

global.app = express()

global.knex = require("knex")({
    client : "mysql",
    connection : {
        host : 'localhost',
        user : 'root',
        password : '',
        database : 'klinik'
    }
})


app.use(cors())
app.use(express.json())


require("./moduls/tes")

app.listen(3000)