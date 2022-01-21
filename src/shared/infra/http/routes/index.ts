import { Router } from "express";
import { mealsRoutes } from "./mealsRoutes.routes";
import { petsRoutes } from "./petsRoutes.routes";
import { speciesRoutes } from "./speciesRoutes.routes";
import { usersRoutes } from "./usersRoutes.routes";


const router = Router();

router.use("/users", usersRoutes);
router.use("/pets", petsRoutes);
router.use("/species", speciesRoutes);
router.use("/meals", mealsRoutes);


export { router };