const express = require("express")
const Joi = require("joi")
const router = express.Router()
require("dotenv").config()
require("../DB/Conn")
const Users = require("../Model/Users")

// save user
router.post("/save", async (req, res) => {
    try {
        const user = {
            name: req.body.name,
            email: req.body.email,
            password: req.body.password
        }
        const checkEmail = await Users.findOne({ email: req.body.email })
        if (checkEmail) {
            return res.send({ msg: "Email is already exists" })
        }
        let data = await Users(user)
        console.log(data);
        if (data.save()) {
            return res.send({ msg: "Account Created Successfully" })
        }
        return res.send({ msg: "Server error" })
    }
    catch (e) {
        return res.send({ msg: e.message })
    }
})

// login user
router.post("/login", async (req, res) => {
    let email = req.body.email
    let password = req.body.password
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