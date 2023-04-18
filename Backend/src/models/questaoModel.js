const connection = require("./connection");

const getProvas = async () => {
	const [provas] = await connection.execute("SELECT * FROM questoes");
	return provas;
};

const getProva = async (id) => {
	const [prova] = await connection.execute("SELECT * FROM questoes WHERE id = ?", [id]);
	return prova;
};

module.exports = {
	getProvas,
	getProva,
};


