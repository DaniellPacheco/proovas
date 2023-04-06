const express = require("express");

const router = express.Router();

const provaController = require("./controllers/provaController");
const provaMiddleware = require("./middlewares/provaMiddleware");
const materialController = require("./controllers/materiaController");

router.get("/provas", provaController.getProvas);
router.get("/provas/:id", provaController.getProva);
router.post("/provas",
	provaMiddleware.validateFieldName,
	provaMiddleware.validateFieldBanca,
	provaController.createProva);
router.put("/provas/:id", 
	provaMiddleware.validateFieldName,
	provaMiddleware.validateFieldBanca,
	provaController.updateProva);
router.delete("/provas/:id", provaController.deleteProva);

router.get("/materiais", materialController.getMaterias);
router.get("/materiais/:id", materialController.getMaterial);
router.post("/materiais", materialController.createMaterial);

module.exports = router;