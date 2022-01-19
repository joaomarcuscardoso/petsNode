import { Router } from "express";
import { CreatePetController } from "../../../modules/pets/useCases/createPet/CreatePetController";
import { AuthenticateUserController } from "../../../modules/accounts/useCases/authenticateUser/AuthenticateUserController";
import { ProfileUserController } from "../../../modules/accounts/useCases/profileUser/ProfileUserController";
import { RegisterUserController } from "../../../modules/accounts/useCases/registerUser/RegisterUserController";


import { ensureAuthenticated } from './middlewares/ensureAuthenticated';
import { CreateSpecieController } from "../../../modules/species/useCases/createSpecie/CreateSpecieController";
import { ListAllSpeciesController } from "../../../modules/species/useCases/listAllSpecies/ListAllSpeciesController";

const router = Router();

const profileUserController = new ProfileUserController();
const registerUserController = new RegisterUserController();
const authenticateUserController = new AuthenticateUserController();

const createPetController = new CreatePetController();

const createSpecieController = new CreateSpecieController();
const listAllSpeciesController = new ListAllSpeciesController();


// User
router.get("/profile", ensureAuthenticated, profileUserController.handle);
router.post("/login", authenticateUserController.handle);
router.post("/register", registerUserController.handle);

// Pet
router.post("/pet", ensureAuthenticated, createPetController.handle);

// Specie
router.post("/species", ensureAuthenticated, createSpecieController.handle);
router.get("/species", ensureAuthenticated, listAllSpeciesController.handle);


export { router };