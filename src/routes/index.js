  
const express = require("express")
const router = express.Router()

router.get("/", function (req, res) {
  res.status(200).send({
    title: "Reprograma - Projeto Final - Mulheres Mentoras",
    version: "1.0.0",
    Content: {
      title: "MULHERES MENTORAS",
      description: "UMA SOBE E PUXA A OUTRA!"

    }
  })
})

module.exports = router
