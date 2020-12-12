const mongoose = require("mongoose")

const mentorandasSchema = new mongoose.Schema({
    id : { type : Number},
    nome: { type : String },
    email: { type : String },
    area: { type: String }
},{
    versionKey: false
})

const mentorandas = new mongoose.model("mentorandas", mentorandasSchema)

module.exports = mentorandas