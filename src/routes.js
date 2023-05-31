const express = require("express");
const routes = express.Router();

const AnnotattionController = require("./controllers/AnnotationController");
const PriorityController = require("./controllers/PriorityController");
const ContentController = require("./controllers/ContentController");

//Routes Annotations
routes.post("/annotations", AnnotattionController.create);
routes.get("/annotations", AnnotattionController.read);
routes.delete("/annotations/:id",AnnotattionController.delete);

//Routes Priority
routes.get("/priorities", PriorityController.read);
routes.post("/priorities/:id", PriorityController.update)

//Routes Contents
routes.post("/contents/:id", ContentController.update)

module.exports = routes;
