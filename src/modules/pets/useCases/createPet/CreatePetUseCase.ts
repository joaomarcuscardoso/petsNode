import { IPetRequest } from "modules/pets/dtos/IPetRequest";
import { Pet } from "modules/pets/infra/entities/Pet";
import { getCustomRepository } from 'typeorm';
import { PetsRepositories } from 'modules/pets/infra/repositories/PetsRepositories';
import { SpeciesRepositories } from 'modules/species/infra/repositories/SpeciesRepositories';
import { MealsRepositories } from 'modules/meals/infra/repositories/MealsRepositories';

class CreatePetUseCase {
  async execute({name, restrictions, meals_id, number_meals, species_id, user_id }: IPetRequest): Promise<Pet> {
    const petRepositories = getCustomRepository(PetsRepositories);
    const mealsRepositories = getCustomRepository(MealsRepositories);
    const speciesRepositories = getCustomRepository(SpeciesRepositories);
    
    const specieExist = await speciesRepositories.find({id: species_id});
    const mealExist = await mealsRepositories.find({id: meals_id});


    if( !specieExist) {
      throw new Error("Specie not found!");
    }

    if( !mealExist) {
      throw new Error("Meal not found!");
    }


    if(!name && !number_meals && !species_id && !user_id) {
      throw new Error("All fields is required")
    }

    const pet = petRepositories.create({
      name, 
      restrictions,
      meals_id, 
      number_meals, 
      species_id,
      user_id
    });

    await petRepositories.save(pet);

    return pet;
  }
}

export { CreatePetUseCase };