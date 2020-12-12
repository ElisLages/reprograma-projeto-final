const mentorandas = require("../models/mentorandas")

const createMentorandas = (req, res) => {
    console.log(req.body);
  
    let mentorada = new mentorandas(req.body)
    mentorada.save(function(err){
        if (err) {
            res.status(500).send({ message: err.message })
        } else {
            res.status(201).send(mentorada.toJSON())
        }
    })
}

const readMentorandas = (req, res) => {
    mentorandas.find(function (err, mentorandas) {
        if (err) {
            res.status(500).send({ message: err.message })
        } else {
            res.status(200).send(mentorandas)
        }
    })
}

const readByArea = (req, res) => { 
    console.log("entrei no método!")
  const area = req.params.area
    console.log(area)
    mentorandas.find({ area : area }, function(err, mentorandas){
        if (err) {
            res.status(500).send({ message: err.message })
        } else {
            res.status(200).send(mentorandas)
        }
    })
}

const updateMentorandas = (req, res) => {
    const id = req.params.id
    mentorandas.updateMany({ id }, { $set : req.body }, function(err){
        if (err) {
            res.status(500).send({ message: err.message })
        } else {
            res.status(200).send({ message : "Mentorada atualizada com sucesso"})
        }
    })
}

const updateOneMentorandas = (req, res) => {
    const id = req.params.id
    mentorandas.updateOne({ id }, { $set : req.body }, function(err){
        if (err) {
            res.status(500).send({ message: err.message })
        } else {
            res.status(200).send({ message : "Mentorada atualizada com sucesso"})
        }
    })
}


const deleteMentorandas = (req, res) => {
    const id = req.params.id
    mentorandas.find({ id }, function(err, mentorada){
        if (mentorada.length > 0) {
          mentorandas.deleteMany({ id }, function (err){
              if (err) {
                res.status(500).send({ message: err.message })
              }
              res.status(200).send({ message : "Mentorada removida com sucesso"})
          })  
       } else {
           res.status(200).send({
               message: 'Não há mentorada a ser removida!',
               status: 'EMPTY'
           })
        }
    })
}

module.exports = {
    
    createMentorandas,
    readMentorandas,
    readByArea,
    updateMentorandas,
    updateOneMentorandas,
    deleteMentorandas 

}