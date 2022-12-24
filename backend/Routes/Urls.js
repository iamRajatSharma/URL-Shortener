const express = require("express")
const router = express.Router()
require("dotenv").config()
require("../DB/Conn")


router.get("/", (req, res) => {
    res.send("Its URLS")
})


module.exports = router;