require('dotenv-safe').config()

const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require("body-parser")

const app = express();

mongoose.connect(process.env.MONGODB_URL, { 
  useNewUrlParser: true, 
  useUnifiedTopology: true 
})

//mongoose.set('useCreateIndex', true)

let db = mongoose.connection


db.on("error", console.log.bind(console, "connection error:"))
db.once("open", function (){
  console.log("Connection achieved successfully.")
})


const index = require("./routes/index")
const mentoras = require("./routes/mentorasRoute")
const mentorandas = require("./routes/mentorandasRoute")

app.use(bodyParser.json())

app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*")
    res.header(
      "Access-Control-Allow-Headers",
      "Origin, X-Requested-With, Content-Type, Accept"
      )
      next()
    })
  
  app.use("/", index)
  app.use("/mentoras", mentoras)
  app.use("/mentorandas", mentorandas)

module.exports = app
