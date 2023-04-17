const materiaModel = require("../models/materiaModel");

const getMaterias = async (request, response) => {
	const materiais = await materiaModel.getMaterias();
	return response.status(200).json(materiais);
};

const getMateria = async (request, response) => {
	const { id } = request.params;
	const material = await materiaModel.getMateria(id);
	return response.status(200).json(material);
};

const createMateria = async (request, response) => {
	const materia = await materiaModel.createMateria(request.body);
	return response.status(200).json(materia);
	// return response.send("teste");
};

const updatedMateria = async (request, response) => {
	const { id } = request.params;
	const materia = await materiaModel.updateMateria(id, request.body);
	response.status(200).json(materia);
};

const deleteMateria = async (request, response) => {
	const { id } = request.params;
	await materiaModel.deleteMateria(id);
	return response.status(200).json(`Material deletado ${id}`);
};

module.exports = {
	getMaterias,
	getMateria,
	createMateria,
	updatedMateria,
	deleteMateria
};