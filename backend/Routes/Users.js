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
    let email = req.body.email
    let password= req.body.password
    let data = await Users.findOne({ email: email })
    if (data) {
        
        if (data.password == password) {
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