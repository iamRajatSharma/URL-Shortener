const express = require("express")
const router = express.Router()
require("dotenv").config()
require("../DB/Conn")
const Urls = require("../Model/Urls")

// save url data
router.post("/save", async (req, res) => {
    let data = await Urls(req.body)
    data = await data.save()
    res.send(req.body)
})

// fetch all urls
router.get("/fetch", async (req, res) => {
    let data = await Urls.find({})
    res.send(data)
})

// fetch urls and update data
router.get("/fetch&update/:id", async (req, res) => {
    let data = await Urls.findOne({ _id: req.params.id })
    let hits = (data.hits + 1)
    let updatedData = await Urls.updateOne({ _id: req.params.id }, { $set: { hits: hits } })
    res.send(data)
})

// delete single url
router.delete("/delete/:id", async (req, res) => {
    let data = await Urls.deleteOne({ _id: req.params.id })
    res.send(data)
})

// fetch Signle Data url
router.get("/fetch/:id", async (req, res) => {
    let data = await Urls.findOne({ _id: req.params.id })
    res.send(data)
})


//update data
router.post("/update/:id", async (req, res) => {
    let data = await Urls.updateOne({ $id: req.params.id }, { $set: req.body })
    res.send(data)
})

module.exports = router;