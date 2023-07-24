const StoreController = require("../controllers/Store.controller.js");
module.exports = function (app) {
	app.get("/api", StoreController.index);
	app.get("/api/Store/", StoreController.getAll);
	app.get("/api/Store/:id", StoreController.findOne);
	app.post("/api/Store/", StoreController.createStore);
	app.patch("/api/Store/:id", StoreController.updateStore);
	app.delete("/api/Store/:id", StoreController.deleteOne);
};
