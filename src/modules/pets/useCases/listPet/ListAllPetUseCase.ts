import { getCustomRepository } from 'typeorm';
import { PetsRepositories } from 'modules/pets/infra/repositories/PetsRepositories';
import { Pet } from '@modules/pets/infra/entities/Pet';


class ListAllPetUseCase {
  async execute({user_id}): Promise<Pet[]> {
    const petsRepositories = getCustomRepository(PetsRepositories);

    const pets = await petsRepositories.find({user_id});
  
    return pets;
  }
}

export { ListAllPetUseCase };