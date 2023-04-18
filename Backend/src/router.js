const express = require("express");

const router = express.Router();

const provaController = require("./controllers/provaController");
const materialController = require("./controllers/materiaController");
const questaoController = require("./controllers/questaoController");
const provaMiddleware = require("./middlewares/provaMiddleware");
const materiaMiddleware = require("./middlewares/materiaMiddleware");

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
router.get("/materiais/:id", materialController.getMateria);
router.post("/materiais",
	materiaMiddleware.validateMateriaField,
	materialController.createMateria);
router.put("/materiais/:id", materialController.updatedMateria);
router.delete("/materiais/:id", materialController.deleteMateria);

router.get("/questoes", questaoController.getProvas);
router.get("/questoes/:id", questaoController.getProva);

module.exports = router;