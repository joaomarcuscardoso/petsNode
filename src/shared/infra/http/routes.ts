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

import { CreateMealController } from "@modules/meals/UseCases/createMeal/CreateMealController";
import { ListAllPetController } from "@modules/pets/useCases/listPet/ListAllPetController";
import { ListAllMealController } from "@modules/meals/UseCases/listAllMeal/ListAllMealController";
import { UpdateMealController } from "@modules/meals/UseCases/updateMeal/UpdateMealController";
import { DeleteMealController } from "@modules/meals/UseCases/deleteMeal/DeleteMealController";
import { DeletePetController } from "@modules/pets/useCases/deletePet/DeletePetController";
import { UpdatePetController } from "@modules/pets/useCases/updatePet/UpdatePetController";



const router = Router();

const profileUserController = new ProfileUserController();
const registerUserController = new RegisterUserController();
const authenticateUserController = new AuthenticateUserController();

const createPetController = new CreatePetController();
const listAllPetController = new ListAllPetController();
const deletePetController = new DeletePetController();
const updatePetController = new UpdatePetController();

const createSpecieController = new CreateSpecieController();
const listAllSpeciesController = new ListAllSpeciesController();
const updateSpecieController = new UpdateSpecieController();
const deleteSpecieController = new DeleteSpecieController();


const createMealController = new CreateMealController();
const listAllMealController = new ListAllMealController();
const updateMealController = new UpdateMealController();
const deleteMealController = new DeleteMealController();

// User
router.get("/profile", ensureAuthenticated, profileUserController.handle);
router.post("/login", authenticateUserController.handle);
router.post("/register", registerUserController.handle);

// Pet
router.post("/pets", ensureAuthenticated, createPetController.handle);
router.get("/pets", ensureAuthenticated, listAllPetController.handle);
router.delete("/pets", ensureAuthenticated, deletePetController.handle);
router.put("/pets", ensureAuthenticated, updatePetController.handle);

// Specie
router.post("/species", ensureAuthenticated, createSpecieController.handle);
router.get("/species", ensureAuthenticated, listAllSpeciesController.handle);
router.put("/species", ensureAuthenticated, updateSpecieController.handle);
router.delete("/species", ensureAuthenticated, deleteSpecieController.handle);

// Meals
router.post("/meals", ensureAuthenticated, createMealController.handle);
router.get("/meals", ensureAuthenticated, listAllMealController.handle);
router.put("/meals", ensureAuthenticated, updateMealController.handle);
router.delete("/meals", ensureAuthenticated, deleteMealController.handle)

export { router };