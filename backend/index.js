const express = require("express")
const app = express()
var cors = require('cors')

require("dotenv").config()
require("./DB/Conn")

app.use(cors())
app.use(express.json())
app.use("/urls", require("./Routes/Urls"))
app.use("/users", require("./Routes/Users"))
app.set("view engine", "ejs")

app.listen(process.env.PORT, (err) => {
    if (!err) {
        console.log(`Server is running on  http://localhost:${process.env.PORT}`)
    }
})