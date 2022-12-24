const mongoose = require("mongoose")
require("dotenv").config()

mongoose.connect(process.env.DB_URL, (err) => {
    if (err) {
        console.log(err)
    }
    else {
        console.log("DB Connected")
    }
})