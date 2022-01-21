import { getCustomRepository } from 'typeorm';
import { PetsRepositories } from 'modules/pets/infra/repositories/PetsRepositories';

class UpdatePetUseCase {
  async execute({ id, name, number_meals, restrictions, species_id, user_id }): Promise<string> {
    const petsRepositories = getCustomRepository(PetsRepositories);

    const pet = await petsRepositories.findOne({id, user_id});
    if(!pet) {
      throw new Error("Pet not found");
    }

    if(name) {
      pet.name = name;
    }

    if(number_meals) {
      pet.number_meals = number_meals;
    }

    if(restrictions) {
      pet.restrictions = restrictions;
    }

    if(species_id) {
      pet.species_id = species_id;
    }

    await petsRepositories.save(pet);

    return "Pet was been update";
  }
}

export { UpdatePetUseCase };