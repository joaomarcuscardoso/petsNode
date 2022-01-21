import { CreatePetController } from "@modules/pets/useCases/createPet/CreatePetController";
import { DeletePetController } from "@modules/pets/useCases/deletePet/DeletePetController";
import { ListAllPetController } from "@modules/pets/useCases/listPet/ListAllPetController";
import { UpdatePetController } from "@modules/pets/useCases/updatePet/UpdatePetController";
import { Router } from "express";
import { ensureAuthenticated } from "../middlewares/ensureAuthenticated";

const petsRoutes = Router();


const createPetController = new CreatePetController();
const listAllPetController = new ListAllPetController();
const deletePetController = new DeletePetController();
const updatePetController = new UpdatePetController();


petsRoutes.post("/", ensureAuthenticated, createPetController.handle);
petsRoutes.get("/", ensureAuthenticated, listAllPetController.handle);
petsRoutes.delete("/del/:id", ensureAuthenticated, deletePetController.handle);
petsRoutes.put("/edit/:id", ensureAuthenticated, updatePetController.handle);

export { petsRoutes };