const validateFieldName = (request, response, next) => {
	const { body } = request;

	if (body.nome === undefined) {
		return response.status(400).json({ message: "Campo nome é requerido. "});
	}

	if (body.nome === "") {
		return response.status(400).json({ message: "Campo nome não ser vazio. "});
	}

	next();
};

const validateFieldBanca = (request, response, next) => {
	const { body } = request;

	if (body.banca === undefined) {
		return response.status(400).json({ message: "Campo banca é requerido. "});
	}

	if (body.banca === "") {
		return response.status(400).json({ message: "Campo banca não ser vazio. "});
	}

	next();
};



module.exports = {
	validateFieldName,
	validateFieldBanca
};