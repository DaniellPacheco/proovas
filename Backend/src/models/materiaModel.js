const connection = require("../models/connection");

const getMaterias = async () => {
	const [materia] = await connection.execute("SELECT * FROM materias");
	return materia;
};

const getMaterial = async (id)  => {
	const [material] = await connection.execute(`SELECT * FROM materias WHERE id = ${id}`);
	return material;
};

const createMaterial = async (material) => {
	const { materialText } = material;

	const createdMaterial = await connection.execute("INSERT INTO materias(material) VALUES(?)", materialText);
	return createdMaterial;

};

module.exports =  {
	getMaterias,
	getMaterial,
	createMaterial
};