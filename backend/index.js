const express = require("express")
const app = express()
require("dotenv").config()
require("./DB/Conn")

app.set("view engine", "ejs")
app.use("/urls", require("./Routes/Urls"))
app.use("/users", require("./Routes/Users"))


app.listen(process.env.PORT, (err) => {
    if (!err) {
        console.log(`Server is running on  http://localhost:${process.env.PORT}`)
    }
})