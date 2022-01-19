import { SpeciesRepositories } from "modules/species/infra/repositories/SpeciesRepositories";
import { ISpecieRequest } from 'modules/species/dtos/ISpecieRequest';
import { getCustomRepository } from "typeorm";

class DeleteSpecieUseCase {
  async execute({id, user_id}: ISpecieRequest): Promise<String> {
    const speciesRepositories = getCustomRepository(SpeciesRepositories);
  
    if(!id) {
      throw new Error("Specie's id is required!")
    }

    const specie = await speciesRepositories.findOne({id, user_id});

    if(!specie) {
      throw new Error("Specie's not found");
    }

    await speciesRepositories.remove(specie);

    return "The Species was been deleted";
    
  }
}

export { DeleteSpecieUseCase };