const mentoras = require("../models/mentoras")

const createMentoras = (req, res) => {
    console.log(req.body);
  
    let mentora = new mentoras(req.body)
    mentora.save(function(err){
        if (err) {
            res.status(500).send({ message: err.message })
        } else {
            res.status(201).send(mentora.toJSON())
        }
    })
}

const readMentoras = (req, res) => {
    mentoras.find(function (err, mentoras) {
        if (err) {
            res.status(500).send({ message: err.message })
        } else {
            res.status(200).send(mentoras)
        }
    })
}

const readMentorasDisponiveis = (req, res) => {
    mentoras.find({disponiveis : true}, function (err, mentoras) {
        if (err) {
            res.status(500).send({ message: err.message })
        } else {
            res.status(200).send(mentoras)
        }
    })
}

const readByArea = (req, res) => { 
    console.log("entrei no método!")
  const area = req.params.area
    console.log(area)
    mentoras.find({ area : area }, function(err, mentoras){
        if (err) {
            res.status(500).send({ message: err.message })
        } else {
            res.status(200).send(mentoras)
        }
    })
}


const updateMentoras = (req, res) => {
    const id = req.params.id
    mentoras.updateMany({ id }, { $set : req.body }, function(err){
        if (err) {
            res.status(500).send({ message: err.message })
        } else {
            res.status(200).send({ message : "Mentora atualizada com sucesso"})
        }
    })
}

const updateOneMentoras = (req, res) => {
    const id = req.params.id
    mentoras.updateOne({ id }, { $set : req.body }, function(err){
        if (err) {
            res.status(500).send({ message: err.message })
        } else {
            res.status(200).send({ message : "Mentora atualizada com sucesso"})
        }
    })
}

const deleteMentoras = (req, res) => {
    const id = req.params.id
    mentoras.find({ id }, function(err, mentora){
        if (mentora.length > 0) {
          mentoras.deleteMany({ id }, function (err){
              if (err) {
                res.status(500).send({ message: err.message })
              }
              res.status(200).send({ message : "Mentora removida com sucesso"})
          })  
       } else {
           res.status(200).send({
               message: 'Não há mentora a ser removida!',
               status: 'EMPTY'
           })
        }
    })
}

module.exports = {
    
    createMentoras,
    readMentoras,
    readByArea,
    readMentorasDisponiveis, 
    updateMentoras,
    updateOneMentoras,
    deleteMentoras 

}