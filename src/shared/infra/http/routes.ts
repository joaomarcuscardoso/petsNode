import { Router } from "express";


import { AuthenticateUserController } from "modules/accounts/useCases/authenticateUser/AuthenticateUserController";
import { ProfileUserController } from "@modules/accounts/useCases/profileUser/ProfileUserController";
import { RegisterUserController } from "@modules/accounts/useCases/registerUser/RegisterUserController";

import { CreateSpecieController } from "@modules/species/useCases/createSpecie/CreateSpecieController";
import { ListAllSpeciesController } from "@modules/species/useCases/listAllSpecies/ListAllSpeciesController";
import { UpdateSpecieController } from "@modules/species/useCases/updateSpecie/UpdateSpecieController";

import { ensureAuthenticated } from './middlewares/ensureAuthenticated';
import { DeleteSpecieController } from "modules/species/useCases/deleteSpecie/DeleteSpecieController";
import { CreatePetController } from "@modules/pets/useCases/createPet/CreatePetController";



const router = Router();

const profileUserController = new ProfileUserController();
const registerUserController = new RegisterUserController();
const authenticateUserController = new AuthenticateUserController();

const createPetController = new CreatePetController();

const createSpecieController = new CreateSpecieController();
const listAllSpeciesController = new ListAllSpeciesController();
const updateSpecieController = new UpdateSpecieController();
const deleteSpecieController = new DeleteSpecieController();

// User
router.get("/profile", ensureAuthenticated, profileUserController.handle);
router.post("/login", authenticateUserController.handle);
router.post("/register", registerUserController.handle);

// Pet
router.post("/pets", ensureAuthenticated, createPetController.handle);

// Specie
router.post("/species", ensureAuthenticated, createSpecieController.handle);
router.get("/species", ensureAuthenticated, listAllSpeciesController.handle);
router.put("/species", ensureAuthenticated, updateSpecieController.handle);
router.delete("/species", ensureAuthenticated, deleteSpecieController.handle);

export { router };