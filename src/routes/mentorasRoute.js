const express = require("express")
const router = express.Router()
const controller = require("../controllers/mentorasController")

router.post("/", controller.createMentoras)
router.get("/area/:area", controller.readByArea)
router.get("/", controller.readMentoras)
router.get("/disponiveis", controller.readMentorasDisponiveis)
router.put("/:id", controller.updateMentoras)
router.patch("/:id", controller.updateOneMentoras)
router.delete("/:id", controller.deleteMentoras)


module.exports = router













module.exports = router