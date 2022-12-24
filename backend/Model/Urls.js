const mongoose = require("mongoose")

const UrlSchema = mongoose.Schema({
    short: {
        type: String,
        required: true
    },
    long: {
        type: String,
        required: true
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