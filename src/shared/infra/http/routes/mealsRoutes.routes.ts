import { CreateMealController } from "@modules/meals/UseCases/createMeal/CreateMealController";
import { DeleteMealController } from "@modules/meals/UseCases/deleteMeal/DeleteMealController";
import { ListAllMealController } from "@modules/meals/UseCases/listAllMeal/ListAllMealController";
import { UpdateMealController } from "@modules/meals/UseCases/updateMeal/UpdateMealController";
import { Router } from "express";
import { ensureAuthenticated } from "../middlewares/ensureAuthenticated";


const mealsRoutes = Router();
const createMealController = new CreateMealController();
const listAllMealController = new ListAllMealController();
const updateMealController = new UpdateMealController();
const deleteMealController = new DeleteMealController();

mealsRoutes.post("/", ensureAuthenticated, createMealController.handle);
mealsRoutes.get("/", ensureAuthenticated, listAllMealController.handle);
mealsRoutes.put("/edit/:id", ensureAuthenticated, updateMealController.handle);
mealsRoutes.delete("/del/:id", ensureAuthenticated, deleteMealController.handle)

export { mealsRoutes };