const connection = require("../models/connection");

const getMaterias = async () => {
	const [materia] = await connection.execute("SELECT * FROM materias");
	return materia;
};

const getMateria = async (id)  => {
	const [material] = await connection.execute(`SELECT * FROM materias WHERE id = ${id}`);
	return material;
};

const createMateria = async (materiaBody) => {
	const { materia } = materiaBody;

	const query = "INSERT INTO materias(materia) values(?)";
	const [createdMateria] = await connection.execute(query, [materia]);

	return { 
		message: "inserido com sucesso!",
		insertId: createdMateria.insertId 
	};
};

const updateMateria = async (id, materiaBody) => {
	const { materia } = materiaBody;

	const query = "UPDATE materias SET materia = ? WHERE id = ?";
	const [updatedMateria] = await connection.execute(query, [materia, id]);

	return {
		message: "atualizado com sucesso",
		insertId: updatedMateria.insertId
	};

};

const deleteMateria = async (id) => {
	const [removeMateria] = await connection.execute("DELETE FROM materias WHERE id = ?", [id]);
	return removeMateria;

};

module.exports =  {
	getMaterias,
	getMateria,
	createMateria,
	deleteMateria,
	updateMateria
};