const provaModel = require("../models/provaModel");

const getProvas = async (_request, response) => {
	const provas = await provaModel.getProvas();
	return response.status(200).json(provas);
};

const createProva = async (request, response) => {
	const createdProva = await provaModel.createProva(request.body);
	return response.status(201).json(createdProva);
};

const updateProva = async (request, response) => {
	const { id } = request.params;

	if(isNaN(Number(id))) {
		return response.status(400).json({ erro: "O ID da proava deve ser apenas números!" });
	}

	const prova = await provaModel.updateProva(id, request.body);
	return response.status(204).json(prova);
};

module.exports = {
	getProvas,
	createProva,
	updateProva
};