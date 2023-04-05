const connection = require("./connection");

const getProvas = async () => {
	const [provas] = await connection.execute("SELECT * FROM provas");
	return provas;
};

const getProva = async (id) => {
	const [prova] = await connection.execute("SELECT * FROM provas WHERE id = ?", [id]);
	return prova;
};

const createProva = async (prova) => {
	const { nome, banca, linkEdital } = prova;
	const dateUTC = new Date(Date.now()).toUTCString();

	const query = "INSERT INTO provas(nome, banca, data_prova, link_edital) values(?, ?, ?, ?)";
	const [createdProva] = await connection.execute(query, [nome, banca, dateUTC, linkEdital]);

	return { 
		message: "inserido com sucesso!",
		insertId: createdProva.insertId 
	};
};

const updateProva = async (id, prova) => {
	const { nome, banca, dataProva, linkEdital } = prova;
	const newDateUTC = new Date(Date.now()).toUTCString();

	const updatedDate = dataProva ?  dataProva : newDateUTC;

	const query = "UPDATE provas SET nome = ?, banca = ?, data_prova = ?, link_edital = ? WHERE id = ?";

	const [updatedProva] = await connection.execute(query, [nome, banca, updatedDate, linkEdital, id]);
	return {
		message: "Prova atualizada com sucesso!",
		insertId: updatedProva.insertId
	};
};

const deleteProva = async (id) => {
	const [removedProva] = await connection.execute("DELETE FROM provas WHERE id = ?", [id]);
	return removedProva;
};

module.exports = {
	getProvas,
	getProva,
	createProva,
	updateProva,
	deleteProva
};