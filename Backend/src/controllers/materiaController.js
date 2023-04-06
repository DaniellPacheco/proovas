const materiaModel = require("../models/materiaModel");

const getMaterias = async (request, response) => {
	const materiais = await materiaModel.getMaterias();
	return response.status(200).json(materiais);
};

const getMaterial = async (request, response) => {
	const { id } = request.params;
	const material = await materiaModel.getMaterial(id);
	return response.status(200).json(material);
};

const createMaterial = async (request, response) => {
	console.log(request.body);
};

module.exports = {
	getMaterias,
	getMaterial,
	createMaterial
};