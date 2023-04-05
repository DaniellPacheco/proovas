const express = require("express");

const router = express.Router();

const provaController = require("./controllers/provaController");
const provaMiddleware = require("./middlewares/provaMiddleware");
// const provaMiddleware = require("./m")

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

module.exports = router;