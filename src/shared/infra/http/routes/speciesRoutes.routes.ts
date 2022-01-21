import { Router } from "express";
import { CreateSpecieController } from "@modules/species/useCases/createSpecie/CreateSpecieController";
import { DeleteSpecieController } from "@modules/species/useCases/deleteSpecie/DeleteSpecieController";
import { ListAllSpeciesController } from "@modules/species/useCases/listAllSpecies/ListAllSpeciesController";
import { UpdateSpecieController } from "@modules/species/useCases/updateSpecie/UpdateSpecieController";
import { ensureAuthenticated } from "../middlewares/ensureAuthenticated";


const speciesRoutes = Router();

const createSpecieController = new CreateSpecieController();
const listAllSpeciesController = new ListAllSpeciesController();
const updateSpecieController = new UpdateSpecieController();
const deleteSpecieController = new DeleteSpecieController();


speciesRoutes.post("/", ensureAuthenticated, createSpecieController.handle);
speciesRoutes.get("/", ensureAuthenticated, listAllSpeciesController.handle);
speciesRoutes.put("/edit/:id", ensureAuthenticated, updateSpecieController.handle);
speciesRoutes.delete("/del/:id", ensureAuthenticated, deleteSpecieController.handle);

export { speciesRoutes };