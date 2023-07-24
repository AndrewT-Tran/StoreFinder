const Store = require ("../models/Store.model.js")

module.exports.index = (request, response) => {
	response.json({
		message: "Hello World"
	});
};

module.exports.getAll = (request, response) => {
	Store.find({})
		.then((store) => response.json(store))
		.catch((err) => response.json(err));
};

module.exports.createStore = (request, response) => {
	const { Name, Number } = request.body;
	const newStore = new Store({
		Name,
		Number
	});
	newStore
		.save()
		.then((store) => response.json(store))
		.catch((err) => response.json(err));
};

module.exports.updateStore = (request, response) => {
	const { Name,Number } = request.body;
	if (!Name || !Number) {
		return response
			.status(400)
			.json({ error: "Note title and body cannot be empty" });
	}
	Store.findOneAndUpdate({ _id: request.params.id }, request.body, {
		new: true,
	})
		.then((updateStore) => response.json(updateStore))
		.catch((err) => response.json(err));
};

module.exports.findOne = (request, response) => {
	Store.findOne({ _id: request.params.id })
		.then((store) => response.json(store))
		.catch((err) => response.json(err));
};

module.exports.deleteOne = (request, response) => {
	Store.deleteOne({ _id: request.params.id })
		.then((deleteConfirmation) => response.json(deleteConfirmation))
		.catch((err) => response.json(err));
};
