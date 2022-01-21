import { Router } from "express";

import { DeleteUserController } from "@modules/accounts/useCases/deleteUser/DeleteUserController";
import { UpdateUserController } from "@modules/accounts/useCases/updateUser/UpdateUserController";

import { AuthenticateUserController } from "modules/accounts/useCases/authenticateUser/AuthenticateUserController";
import { ProfileUserController } from "@modules/accounts/useCases/profileUser/ProfileUserController";
import { RegisterUserController } from "@modules/accounts/useCases/registerUser/RegisterUserController";
import { ensureAuthenticated } from "../middlewares/ensureAuthenticated";

const usersRoutes = Router();

const profileUserController = new ProfileUserController();
const registerUserController = new RegisterUserController();
const authenticateUserController = new AuthenticateUserController();
const deleteUserController = new DeleteUserController();
const updateUserController = new UpdateUserController();


// User
usersRoutes.get("/profile", ensureAuthenticated, profileUserController.handle);
usersRoutes.delete("/del", ensureAuthenticated, deleteUserController.handle);
usersRoutes.post("/login", authenticateUserController.handle);
usersRoutes.post("/register", registerUserController.handle);
usersRoutes.put("/profile/save", ensureAuthenticated, updateUserController.handle);

export { usersRoutes }
