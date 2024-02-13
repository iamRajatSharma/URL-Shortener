const express = require("express")
const app = express()
var cors = require('cors')
var bodyParser = require('body-parser')

require("dotenv").config()
require("./DB/Conn")

app.use(cors())
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json())


app.use("/urls", require("./Routes/Urls"))
app.use("/users", require("./Routes/Users"))
app.set("view engine", "ejs")

app.listen(process.env.PORT, (err) => {
    if (!err) {
        console.log(`Server is running on  http://localhost:${process.env.PORT}`)
    }
})