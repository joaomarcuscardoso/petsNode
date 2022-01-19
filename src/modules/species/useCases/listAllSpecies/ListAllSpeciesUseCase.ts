import { Specie } from 'modules/species/infra/entities/Specie';
import { SpeciesRepositories } from "../../infra/repositories/SpeciesRepositories";
import { getCustomRepository } from 'typeorm';

class ListAllSpeciesUseCase {
  async execute({user_id}): Promise<Specie[]> {
    const speciesRepositories = getCustomRepository(SpeciesRepositories);

    const species = await speciesRepositories.find({user_id});
    

    return species;
  }
}

export { ListAllSpeciesUseCase };