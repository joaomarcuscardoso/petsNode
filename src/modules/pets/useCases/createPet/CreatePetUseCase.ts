import { IPetRequest } from "modules/pets/dtos/IPetRequest";
import { Pet } from "modules/pets/infra/entities/Pet";
import { getCustomRepository } from 'typeorm';
import { PetsRepositories } from 'modules/pets/infra/repositories/PetsRepositories';

class CreatePetUseCase {
  async execute({name, restrictions, meals_id, number_meals, species_id }: IPetRequest): Promise<Pet> {
    const petRepositories = getCustomRepository(PetsRepositories);

    if(!name && number_meals && species_id) {
      throw new Error("All fields is required")
    }

    const pet = petRepositories.create({
      name, 
      restrictions,
      meals_id, 
      number_meals, 
      species_id
    });

    await petRepositories.save(pet);

    return pet;
  }
}

export { CreatePetUseCase };