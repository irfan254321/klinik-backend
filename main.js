const cors = require("cors")
const express = require("express")

global.app = express

global.app = require("knex")({
    client : mysql,
    connection : {
        host : 'localhost',
        user : 'root',
        password : '',
        database : 'klinik'
    }
})


app.use(express())
app.use(cors())

require("")

app.listen(3000)