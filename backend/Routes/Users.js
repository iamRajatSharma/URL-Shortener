const express = require("express")
const Joi = require("joi")
const router = express.Router()
require("dotenv").config()
require("../DB/Conn")
const Users = require("../Model/Users")

// save user
router.post("/save", async (req, res) => {
    let data = await Users(req.body)
    // data = await data.save()
    res.send(data)
    // res.send({ msg: "Account created Successfully" })
})

// login user
router.post("/login", async (req, res) => {
    let { email, password } = req.body
    let data = await Users.findOne({ email: "admin@blog.in" })
    if (data) {
        if (data.password == 12345) {
            res.send(data)
        }
        else {
            res.send({ "msg": "Incorrect Email || Password" })
        }
    }
    else {
        res.send({ "msg": "User Not Found" })
    }
})


module.exports = router;