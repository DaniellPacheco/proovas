const provaModel = require("../models/provaModel");

const getProvas = async (_request, response) => {
	const provas = await provaModel.getProvas();
	return response.status(200).json(provas);
};

const getProva = async (request, response) => {
	const { id } = request.params;

	if(isNaN(Number(id))) {
		return response.status(400).json({erro: "O ID da prova deve ser apenas números!"});
	}

	const prova = await provaModel.getProva(id);
	return response.status(200).json(prova);
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

const deleteProva = async (request, response) => {
	const { id } = request.params;

	await provaModel.deleteProva(id);
	return response.status(200).json({message: `Prova ${id} deletada com sucesso.`});
};

module.exports = {
	getProvas,
	getProva,
	createProva,
	updateProva,
	deleteProva
};