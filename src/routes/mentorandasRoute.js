const express = require("express")
const router = express.Router()
const controller = require("../controllers/mentorandasController")

router.post("/", controller.createMentorandas)
router.get("/area/:area", controller.readByArea)
router.get("/", controller.readMentorandas)
router.put("/:id", controller.updateMentorandas)
router.patch("/:id", controller.updateOneMentorandas)
router.delete("/:id", controller.deleteMentorandas)


module.exports = router
















module.exports = router