const validateMateriaField = (request, response, next) => {
	const { body } = request;

	if (body.materia == undefined || body.materia == "")  {
		return response.status(400).json({ message: "Campo materia é requerido. "});
	}

	next();
};

module.exports = {
	validateMateriaField
};