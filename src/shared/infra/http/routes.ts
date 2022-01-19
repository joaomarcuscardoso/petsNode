import { Router } from "express";
import { CreatePetController } from "../../../modules/pets/useCases/CreatePetController";
import { AuthenticateUserController } from "../../../modules/accounts/useCases/Authenticateuser/AuthenticateUserController";
import { ProfileUserController } from "../../../modules/accounts/useCases/Profileuser/ProfileUserController";
import { RegisterUserController } from "../../../modules/accounts/useCases/Registeruser/RegisterUserController";


import { ensureAuthenticated } from './middlewares/ensureAuthenticated';
import { CreateSpecieController } from "../../../modules/species/useCases/CreateSpecieController";

const router = Router();

const profileUserController = new ProfileUserController();
const registerUserController = new RegisterUserController();
const authenticateUserController = new AuthenticateUserController();
const createPetController = new CreatePetController();
const createSpecieController = new CreateSpecieController();

// User
router.get("/profile", ensureAuthenticated, profileUserController.handle);
router.post("/login", authenticateUserController.handle);
router.post("/register", registerUserController.handle);

// Pet
router.post("/pet", ensureAuthenticated, createPetController.handle);

// Specie
router.post("/species", ensureAuthenticated, createSpecieController.handle);


export { router };