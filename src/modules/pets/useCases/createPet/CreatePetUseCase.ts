import { IPetRequest } from "modules/pets/dtos/IPetRequest";
import { Pet } from "modules/pets/infra/entities/Pet";
import { getCustomRepository } from 'typeorm';
import { PetsRepositories } from 'modules/pets/infra/repositories/PetsRepositories';
import { SpeciesRepositories } from 'modules/species/infra/repositories/SpeciesRepositories';
import { AppError } from "@shared/errors/AppError";

class CreatePetUseCase {
  async execute({name, restrictions, number_meals, species_id, user_id }: IPetRequest): Promise<Pet> {
    const petRepositories = getCustomRepository(PetsRepositories);
    const speciesRepositories = getCustomRepository(SpeciesRepositories);
    
    const specieExist = await speciesRepositories.findOne({id: species_id, user_id});

    if( !specieExist) {
      throw new AppError("Specie not found!", 404);
    }


    if(!name && !number_meals && !species_id && !user_id) {
      throw new AppError("All fields is required")
    }

    const pet = petRepositories.create({
      name, 
      restrictions, 
      number_meals, 
      species_id,
      user_id
    });

    await petRepositories.save(pet);

    return pet;
  }
}

export { CreatePetUseCase };