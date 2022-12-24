const express = require("express")
const router = express.Router()
require("dotenv").config()
require("../DB/Conn")


router.get("/", (req, res) => {
    res.send("Its Users")
})


module.exports = router;