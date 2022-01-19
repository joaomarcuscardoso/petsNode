import { EntityRepository, Repository } from "typeorm";
import { Meal } from "../entities/Meal";


@EntityRepository(Meal)
class MealsRepositories extends Repository<Meal> {}

export { MealsRepositories }