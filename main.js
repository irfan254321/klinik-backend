const cors = require("cors")
const express = require("express")
const mysql = require("mysql")
require("dotenv").config()

global.app = express()

global.knex = require("knex")({
    client : "mysql",
    connection : {
        host : process.env.host,
        user : process.env.user,
        password : process.env.password,
        database : process.env.database
    }
})


app.use(cors())
app.use(express.json())

require("./moduls/login")
require("./moduls/queue")

app.listen(3001)