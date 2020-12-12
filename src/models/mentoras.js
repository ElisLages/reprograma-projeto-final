const mongoose = require("mongoose")

const mentorasSchema = new mongoose.Schema({
    id : { type : Number},
    nome: { type : String },
    email: { type : String },
    area: { type: String },
    disponiveis: { type: Boolean}
},{
    versionKey: false
})

const mentoras = new mongoose.model("mentoras", mentorasSchema)

module.exports = mentoras