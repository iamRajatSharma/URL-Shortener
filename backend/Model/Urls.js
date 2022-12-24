const mongoose = require("mongoose")

const UrlSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    short: {
        type: String,
        required: true
    },
    long: {
        type: String,
        required: true
    },
    hits: {
        type: Number,
        required: true,
        default: 0
    },
    email: {
        type: String,
        required: true
    },
    date: {
        type: String,
        required: true
    },

})
module.exports = mongoose.model("urls", UrlSchema)