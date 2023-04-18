const questaoModel = require("../models/questaoModel");

const getProvas = async (_request, response) => {
	const provas = questaoModel.getProvas();
	return response.status(200).json(provas);
};

const getProva = async (request, response) => {
	const { id } = request.params;

	if(isNaN(Number(id))) {
		return response.status(400).json({erro: "O ID da questão deve ser apenas números!"});
	}

	const prova = await questaoModel.getProva(id);
	return response.status(200).json(prova);
};


module.exports = {
	getProvas,
	getProva
};