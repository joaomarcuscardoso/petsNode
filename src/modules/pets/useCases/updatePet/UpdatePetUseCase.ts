import { getCustomRepository } from 'typeorm';
import { PetsRepositories } from 'modules/pets/infra/repositories/PetsRepositories';
import { Pet } from 'modules/pets/infra/entities/Pet';

class UpdatePetUseCase {
  async execute({ id, name, number_meals, restrictions, species_id, user_id }): Promise<string> {
    const petsRepositories = getCustomRepository(PetsRepositories);

    if( !id ||!name || !number_meals || !restrictions || !species_id) {
      throw new Error("All fill is required!");
    }

    await petsRepositories.createQueryBuilder()
    .update({name: name, number_meals, restrictions, species_id})
    .where({ id, user_id})
    .execute();


    return "Pet was been update";
  }
}

export { UpdatePetUseCase };